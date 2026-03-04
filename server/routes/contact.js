import express from 'express';
import { sendContactEmail } from '../utils/sendEmail.js';

const router = express.Router();

/** POST /api/contact — submit contact form (no auth required) */
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body || {};

    const nameStr = typeof name === 'string' ? name.trim() : '';
    const emailStr = typeof email === 'string' ? email.trim() : '';
    const messageStr = typeof message === 'string' ? message.trim() : '';

    if (!emailStr) {
      return res.status(400).json({ message: 'Email is required' });
    }
    if (!messageStr) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const subjectStr = typeof subject === 'string' ? subject.trim() : '';

    await sendContactEmail({
      name: nameStr || undefined,
      email: emailStr,
      subject: subjectStr || undefined,
      message: messageStr,
    });

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact form error:', err);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

export default router;
