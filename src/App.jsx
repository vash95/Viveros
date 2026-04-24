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

// Estructura principal de una landing corporativa responsive para Vivero Rabadán Ayuso.
const App = () => {
  const [activeLegalModal, setActiveLegalModal] = useState(null);

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
