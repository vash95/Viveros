export const COOKIE_CONSENT_KEY = 'viveros-cookie-consent';
export const COOKIE_CONSENT_EVENT = 'viveros-cookie-consent-updated';

const DEFAULT_COOKIE_CONSENT = {
  necessary: true,
  preferences: false,
  analytics: false,
  updatedAt: null,
};

export const readCookieConsent = () => {
  const rawConsent = window.localStorage.getItem(COOKIE_CONSENT_KEY);

  if (!rawConsent) return null;

  try {
    const parsedConsent = JSON.parse(rawConsent);

    return {
      ...DEFAULT_COOKIE_CONSENT,
      ...parsedConsent,
      necessary: true,
    };
  } catch {
    return null;
  }
};

export const saveCookieConsent = (consentValues) => {
  const normalizedConsent = {
    ...DEFAULT_COOKIE_CONSENT,
    ...consentValues,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(normalizedConsent));
  window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT, { detail: normalizedConsent }));

  return normalizedConsent;
};

export const hasAnalyticsConsent = (consent = readCookieConsent()) => Boolean(consent?.analytics);
