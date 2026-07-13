import express from 'express';
import Stripe from 'stripe';
import { protect } from '../middleware/auth.js';
import Course from '../models/Course.js';
import Purchase from '../models/Purchase.js';
import User from '../models/User.js';
import { getCoursePricing } from '../utils/coursePricing.js';
import { getValidPromo } from '../utils/promoService.js';
import { userOwnsCourse } from '../utils/userPurchases.js';

const router = express.Router();

// Lazy initialization of Stripe - only when needed
let stripeInstance = null;

const getStripe = () => {
  if (stripeInstance) {
    return stripeInstance;
  }

  const key = process.env.STRIPE_SECRET_KEY;
  
  if (!key) {
    console.error('❌ ERROR: STRIPE_SECRET_KEY is not set in environment variables!');
    return null;
  }

  // Clean the key (remove quotes and whitespace)
  const cleanKey = key.trim().replace(/^["']|["']$/g, '');
  
  if (cleanKey.length < 20) {
    console.error('❌ ERROR: Stripe key seems invalid. Expected ~32-40 characters, got:', cleanKey.length);
    return null;
  }

  try {
    stripeInstance = new Stripe(cleanKey);
    return stripeInstance;
  } catch (error) {
    console.error('❌ Error initializing Stripe:', error.message);
    return null;
  }
};

// @route   POST /api/payments/validate-promo
// @desc    Validate promo code and return effective price for a course (no charge)
// @access  Private
router.post('/validate-promo', protect, async (req, res) => {
  try {
    const { promoCode: rawPromoCode, courseSlug } = req.body;
    if (!rawPromoCode || !courseSlug) {
      return res.status(400).json({ valid: false, message: 'Promo code and course are required' });
    }
    const course = await Course.findOne({ slug: courseSlug, isPublished: true });
    if (!course) {
      return res.status(404).json({ valid: false, message: 'Course not found' });
    }
    const user = await User.findById(req.user._id).select('createdAt');
    if (!user) {
      return res.status(404).json({ valid: false, message: 'User not found' });
    }
    const { currentPrice: basePrice, isFreeWindowActive, freeUntil } = await getCoursePricing(course, user);
    const { promo, message } = await getValidPromo(rawPromoCode, course._id);
    if (!promo) {
      return res.json({ valid: false, message: message || 'Invalid promo code' });
    }
    let amountCents = basePrice;
    if (promo.type === 'fixed_price') {
      amountCents = Math.min(amountCents, promo.amountCents);
    } else if (promo.type === 'free') {
      amountCents = 0;
    }
    const currency = (course.currency || 'CAD').toUpperCase();
    return res.json({ valid: true, amountCents, currency, isFreeWindowActive, freeUntil });
  } catch (error) {
    console.error('Validate promo error:', error);
    res.status(500).json({ valid: false, message: error.message });
  }
});

// @route   POST /api/payments/create-checkout-session
// @desc    Create Stripe Checkout Session (or grant free course if promo is free)
// @access  Private
router.post('/create-checkout-session', protect, async (req, res) => {
  try {
    const { courseSlug, promoCode: rawPromoCode } = req.body;

    if (!courseSlug) {
      return res.status(400).json({ message: 'Course slug is required' });
    }

    const course = await Course.findOne({ slug: courseSlug, isPublished: true });
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { currentPrice: basePrice, isFreeWindowActive, freeUntil } = await getCoursePricing(course, user);
    let chargeAmountCents = basePrice;
    let promo = null;
    if (rawPromoCode) {
      const result = await getValidPromo(rawPromoCode, course._id);
      promo = result.promo;
      if (!promo) {
        return res.status(400).json({ message: result.message || 'Invalid promo code' });
      }
    }

    if (promo) {
      if (promo.type === 'fixed_price') {
        chargeAmountCents = Math.min(chargeAmountCents, promo.amountCents);
      } else if (promo.type === 'free') {
        chargeAmountCents = 0;
      }
    }

    // Check if user already owns the course
    if (userOwnsCourse(user, course._id)) {
      return res.status(400).json({ message: 'You already own this course' });
    }

    // Free promo / free window: grant access without Stripe
    if (chargeAmountCents === 0) {
      const freeSource = promo?.code ?? (isFreeWindowActive ? 'free_window' : 'promo');
      const freeSessionId = `free_${freeSource}_${req.user._id}_${course._id}`;

      let purchase = await Purchase.findOne({ stripeSessionId: freeSessionId });
      if (!purchase) {
        try {
          purchase = await Purchase.create({
            user: req.user._id,
            course: course._id,
            stripeSessionId: freeSessionId,
            amount: 0,
            currency: course.currency || 'cad',
            promoCode: promo?.code,
            status: 'completed',
            completedAt: new Date(),
          });
        } catch (err) {
          // Concurrent claim: unique session id already created
          purchase = await Purchase.findOne({ stripeSessionId: freeSessionId });
          if (!purchase) throw err;
        }
      }

      if (!userOwnsCourse(user, course._id)) {
        user.purchases.push(course._id);
        await user.save();
      }

      const successUrl = `${process.env.CLIENT_URL}/checkout/success?session_id=${encodeURIComponent(freeSessionId)}`;
      return res.json({ sessionId: freeSessionId, url: successUrl, isFree: true, isFreeWindowActive, freeUntil });
    }

    const stripe = getStripe();
    if (!stripe) {
      return res.status(500).json({
        message: 'Stripe is not configured. Please set STRIPE_SECRET_KEY in your environment variables.',
      });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: req.user.email,
      line_items: [{
        price_data: {
          currency: (course.currency || 'cad').toLowerCase(),
          unit_amount: chargeAmountCents,
          product_data: {
            name: course.title,
            description: course.subtitle || course.description,
          },
        },
        quantity: 1,
      }],
      metadata: {
        userId: req.user._id.toString(),
        courseId: course._id.toString(),
      },
      success_url: `${process.env.CLIENT_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/checkout/cancel`,
    });

    // Create pending Purchase record
    await Purchase.create({
      user: req.user._id,
      course: course._id,
      stripeSessionId: session.id,
      amount: chargeAmountCents,
      currency: course.currency || 'cad',
      promoCode: promo?.code,
      status: 'pending',
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ message: error.message });
  }
});

// @route   POST /api/payments/webhook
// @desc    Stripe webhook handler
// @access  Public (Stripe calls this)
router.post('/webhook', async (req, res) => {
  const stripe = getStripe();
  if (!stripe) {
    return res.status(500).json({ message: 'Stripe is not configured' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Find the purchase record
      const purchase = await Purchase.findOne({ stripeSessionId: session.id });
      if (!purchase) {
        console.error('Purchase not found for session:', session.id);
        return res.status(404).json({ message: 'Purchase not found' });
      }

      // Update purchase status
      purchase.status = 'completed';
      purchase.completedAt = new Date();
      purchase.stripePaymentIntent = session.payment_intent;
      await purchase.save();

      // Add course to user's purchases
      const user = await User.findById(purchase.user);
      if (user && !userOwnsCourse(user, purchase.course)) {
        user.purchases.push(purchase.course);
        await user.save();
      }

      console.log('Purchase completed successfully:', purchase._id);
    } catch (error) {
      console.error('Error processing webhook:', error);
      return res.status(500).json({ message: error.message });
    }
  }

  res.json({ received: true });
});

// @route   GET /api/payments/verify/:sessionId
// @desc    Verify purchase completion (with fallback to check Stripe directly)
// @access  Private
router.get('/verify/:sessionId', protect, async (req, res) => {
  try {
    const stripe = getStripe();
    let purchase = await Purchase.findOne({ 
      stripeSessionId: req.params.sessionId,
      user: req.user._id,
    }).populate('course');

    if (!purchase) {
      return res.status(404).json({ message: 'Purchase not found' });
    }

    // If purchase is still pending, check Stripe directly as fallback
    if (purchase.status === 'pending' && stripe) {
      try {
        const session = await stripe.checkout.sessions.retrieve(req.params.sessionId);
        
        if (session.payment_status === 'paid') {
          // Payment is complete in Stripe, but webhook hasn't fired yet
          // Update the purchase manually
          purchase.status = 'completed';
          purchase.completedAt = new Date();
          purchase.stripePaymentIntent = session.payment_intent;
          await purchase.save();

          // Add course to user's purchases
          const user = await User.findById(req.user._id);
          if (user && !userOwnsCourse(user, purchase.course._id)) {
            user.purchases.push(purchase.course._id);
            await user.save();
          }

          console.log('Purchase completed via direct Stripe check (webhook fallback)');
        }
      } catch (stripeError) {
        console.error('Error checking Stripe session:', stripeError.message);
      }
    }

    // Refresh purchase from database
    purchase = await Purchase.findById(purchase._id).populate('course');

    if (purchase.status !== 'completed') {
      return res.status(400).json({ 
        message: 'Purchase not completed yet',
        status: purchase.status,
      });
    }

    res.json({
      success: true,
      purchase: {
        id: purchase._id,
        course: {
          slug: purchase.course.slug,
          title: purchase.course.title,
        },
        completedAt: purchase.completedAt,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
