import { useEffect, useState } from 'react';
import { readCookieConsent, saveCookieConsent } from '../utils/cookieConsent';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfiguratorOpen, setIsConfiguratorOpen] = useState(false);
  const [preferencesEnabled, setPreferencesEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = readCookieConsent();

    if (!consent) {
      setIsVisible(true);
      return;
    }

    setPreferencesEnabled(Boolean(consent.preferences));
    setAnalyticsEnabled(Boolean(consent.analytics));
  }, []);

  const hideBanner = () => {
    setIsVisible(false);
    setIsConfiguratorOpen(false);
  };

  const acceptAllCookies = () => {
    saveCookieConsent({ preferences: true, analytics: true });
    hideBanner();
  };

  const rejectOptionalCookies = () => {
    saveCookieConsent({ preferences: false, analytics: false });
    hideBanner();
  };

  const saveCustomConfiguration = () => {
    saveCookieConsent({ preferences: preferencesEnabled, analytics: analyticsEnabled });
    hideBanner();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-slate-700">
            Usamos cookies técnicas (necesarias) y opcionales por categorías. Solo activamos las analíticas si las aceptas explícitamente.
          </p>
          {isConfiguratorOpen && (
            <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700">
              <label className="flex items-center justify-between gap-4">
                <span>Cookies técnicas (necesarias)</span>
                <input type="checkbox" checked disabled className="h-4 w-4 accent-emerald-600" />
              </label>
              <label className="flex items-center justify-between gap-4">
                <span>Cookies de preferencias</span>
                <input
                  type="checkbox"
                  checked={preferencesEnabled}
                  onChange={(event) => setPreferencesEnabled(event.target.checked)}
                  className="h-4 w-4 accent-emerald-600"
                />
              </label>
              <label className="flex items-center justify-between gap-4">
                <span>Cookies analíticas</span>
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                  className="h-4 w-4 accent-emerald-600"
                />
              </label>
            </div>
          )}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={rejectOptionalCookies}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Rechazar
          </button>
          <button
            type="button"
            onClick={() => setIsConfiguratorOpen((currentValue) => !currentValue)}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            {isConfiguratorOpen ? 'Ocultar configuración' : 'Configurar'}
          </button>
          {isConfiguratorOpen && (
            <button
              type="button"
              onClick={saveCustomConfiguration}
              className="rounded-md border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Guardar selección
            </button>
          )}
          <button
            type="button"
            onClick={acceptAllCookies}
            className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
