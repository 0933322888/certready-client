import { useState, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

/**
 * Fetches pricing for all published courses from the API.
 * Refetches when auth user changes so free-window pricing applies after login.
 */
export function useCoursePricing() {
  const { user, token } = useAuth();
  const [pricingBySlug, setPricingBySlug] = useState({});
  const [loading, setLoading] = useState(true);
  const userKey = user?._id || user?.id || token || 'anon';

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api.get('/courses')
      .then((res) => {
        if (cancelled) return;
        const map = {};
        (res.data || []).forEach((c) => {
          map[c.slug] = {
            currentPrice: c.currentPrice ?? c.price,
            fullPrice: c.fullPrice ?? c.price,
            discountedSpotsLeft: c.discountedSpotsLeft ?? 0,
            currency: c.currency || 'CAD',
            isFreeWindowActive: Boolean(c.isFreeWindowActive),
            freeUntil: c.freeUntil || null,
            ownsCourse: Boolean(c.ownsCourse),
          };
        });
        setPricingBySlug(map);
      })
      .catch(() => {
        if (!cancelled) setPricingBySlug({});
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [userKey]);

  return { pricingBySlug, loading };
}

/**
 * Fetches pricing for a single course by slug.
 * Refetches when auth user changes so free-window pricing applies after login.
 */
export function useCoursePricingBySlug(slug) {
  const { user, token } = useAuth();
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(!!slug);
  const userKey = user?._id || user?.id || token || 'anon';

  useEffect(() => {
    if (!slug) {
      setPricing(null);
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    api.get(`/courses/${slug}`)
      .then((res) => {
        if (cancelled) return;
        setPricing({
          currentPrice: res.data.currentPrice ?? res.data.price,
          fullPrice: res.data.fullPrice ?? res.data.price,
          discountedSpotsLeft: res.data.discountedSpotsLeft ?? 0,
          currency: res.data.currency || 'CAD',
          isFreeWindowActive: Boolean(res.data.isFreeWindowActive),
          freeUntil: res.data.freeUntil || null,
          ownsCourse: Boolean(res.data.ownsCourse),
        });
      })
      .catch(() => {
        if (!cancelled) setPricing(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, [slug, userKey]);

  return { pricing, loading };
}
