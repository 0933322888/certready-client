/**
 * Maps URL segment (tradeKey) for SEO landing URLs to tradeSlug used by API/guides.
 * Example: /electrician-red-seal-practice-questions → tradeSlug construction-electrician
 */
export const FREE_PRACTICE_LANDING_TRADES = {
  electrician: 'construction-electrician',
  plumber: 'plumber',
  hairstylist: 'hairstylist',
};

export function getTradeSlugFromLandingKey(tradeKey) {
  return FREE_PRACTICE_LANDING_TRADES[tradeKey] ?? null;
}

export function getLandingKeyFromTradeSlug(tradeSlug) {
  const entry = Object.entries(FREE_PRACTICE_LANDING_TRADES).find(
    ([, slug]) => slug === tradeSlug
  );
  return entry ? entry[0] : null;
}

/** All valid URL path segments for free practice landing pages */
export function getFreePracticeLandingKeys() {
  return Object.keys(FREE_PRACTICE_LANDING_TRADES);
}
