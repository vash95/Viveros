import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Installations from './components/Installations';
import Gallery from './components/Gallery';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import CookieBanner from './components/CookieBanner';
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
  readCookieConsent,
} from './utils/cookieConsent';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const loadAnalyticsScript = () => {
  if (!GA_MEASUREMENT_ID || window.__viverosAnalyticsLoaded) return;

  const analyticsScript = document.createElement('script');
  analyticsScript.async = true;
  analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(analyticsScript);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID);

  window.__viverosAnalyticsLoaded = true;
};

// Estructura principal de una landing corporativa responsive para Vivero Rabadán Ayuso.
const App = () => {
  const [activeLegalModal, setActiveLegalModal] = useState(null);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(() => hasAnalyticsConsent());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.15 },
    );

    document.querySelectorAll('section').forEach((section) => {
      section.classList.add('reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const synchronizeConsent = (event) => {
      const consent = event?.detail ?? readCookieConsent();
      setAnalyticsAllowed(Boolean(consent?.analytics));
    };

    synchronizeConsent();
    window.addEventListener(COOKIE_CONSENT_EVENT, synchronizeConsent);

    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, synchronizeConsent);
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    window[`ga-disable-${GA_MEASUREMENT_ID}`] = !analyticsAllowed;

    if (analyticsAllowed) loadAnalyticsScript();
  }, [analyticsAllowed]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Installations />
        <Gallery />
        <News />
        <Contact />
      </main>
      <Footer
        onOpenLegalNotice={() => setActiveLegalModal('legal')}
        onOpenPrivacyPolicy={() => setActiveLegalModal('privacy')}
      />
      <LegalModal type={activeLegalModal} onClose={() => setActiveLegalModal(null)} />
      <CookieBanner />
    </>
  );
};

export default App;
