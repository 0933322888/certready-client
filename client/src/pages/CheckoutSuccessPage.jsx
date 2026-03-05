import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import SEO from '../components/seo/SEO';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import api from '../utils/api';
import toast from 'react-hot-toast';

export default function CheckoutSuccessPage() {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { dispatch } = useAuth();
  const [loading, setLoading] = useState(true);
  const [purchase, setPurchase] = useState(null);
  const hasVerified = useRef(false);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      toast.error('Invalid checkout session');
      navigate('/');
      return;
    }

    // Prevent duplicate in-flight verification within same mount only.
    // Reset on cleanup so React Strict Mode remount can verify again.
    if (hasVerified.current) {
      return;
    }
    hasVerified.current = true;

    let isMounted = true;
    let retryTimeout = null;

    const verifyPurchase = async (attempt = 1) => {
      if (!isMounted) return;

      try {
        const res = await api.get(`/payments/verify/${sessionId}`);

        if (res.data.success && res.data.purchase) {
          if (isMounted) {
            setPurchase(res.data.purchase);
            setLoading(false);
            toast.success('Purchase confirmed! You now have full access.');
            api.get('/auth/me')
              .then(meRes => {
                if (isMounted) {
                  dispatch({ type: 'SET_USER', payload: meRes.data });
                }
              })
              .catch(console.error);
          }
          return;
        }
      } catch (err) {
        if (!isMounted) return;

        const message = err.response?.data?.message || 'Failed to verify purchase';
        const status = err.response?.data?.status;

        if (status === 'pending' && attempt < 5) {
          retryTimeout = setTimeout(() => {
            if (isMounted) verifyPurchase(attempt + 1);
          }, 2000);
          return;
        }

        if (status === 'pending') {
          toast.error('Purchase is processing. Please refresh in a moment or check your webhook setup.');
        } else {
          toast.error(message);
        }
        setLoading(false);
      }
    };

    verifyPurchase();

    return () => {
      isMounted = false;
      hasVerified.current = false; // Allow remount (e.g. Strict Mode) to verify again
      if (retryTimeout) clearTimeout(retryTimeout);
    };
  }, [searchParams, navigate, dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <SEO noIndex title={t('checkout.seoSuccessTitle')} description={t('checkout.seoSuccessDescription')} />
      <Card className="w-full max-w-md text-center">
        <div className="mb-6">
          <div className="w-20 h-20 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
            {t('checkout.successTitle')}
          </h1>
          <p className="text-text-muted">
            {t('checkout.successMessage', { course: purchase?.course?.title || '' })}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link to={purchase?.course?.slug ? `/learn/${purchase.course.slug}` : '/trades'} className="block">
            <Button size="lg" className="w-full">
              {t('checkout.startLearning')} →
            </Button>
          </Link>
          <Link to="/dashboard" className="block">
            <Button variant="outline" size="lg" className="w-full">
              {t('checkout.goToDashboard')}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
