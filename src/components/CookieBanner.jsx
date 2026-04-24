import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'viveros-cookie-consent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-700">
          Usamos cookies técnicas y analíticas para mejorar tu experiencia. Al continuar navegando, aceptas su uso.
        </p>
        <button
          type="button"
          onClick={acceptCookies}
          className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
        >
          Aceptar cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
