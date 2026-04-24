import { useEffect, useRef, useState } from 'react';

// Cabecera fija con navegación y accesos rápidos a WhatsApp.
const menuItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Conócenos', href: '#conocenos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Novedades', href: '#novedades' },
  { label: 'Contacto', href: '#contacto' },
];

const PalmLogo = () => (
  <svg
    viewBox="0 0 120 120"
    className="h-10 w-10"
    role="img"
    aria-label="Logotipo de palmera verde con tronco en forma de V"
  >
    <defs>
      <linearGradient id="palmLeaves" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>
      <linearGradient id="palmTrunks" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#65a30d" />
        <stop offset="100%" stopColor="#3f6212" />
      </linearGradient>
    </defs>

    <g fill="url(#palmLeaves)">
      <path d="M60 50 C42 28, 20 23, 5 26 C23 35, 38 42, 54 56 Z" />
      <path d="M60 50 C49 21, 51 8, 60 2 C68 12, 70 28, 65 54 Z" />
      <path d="M60 50 C72 20, 93 15, 114 20 C98 31, 82 40, 66 56 Z" />
      <path d="M60 52 C39 44, 23 50, 10 63 C28 64, 43 63, 57 60 Z" />
      <path d="M60 52 C84 47, 102 55, 113 70 C94 68, 78 63, 63 60 Z" />
    </g>

    <g fill="none" stroke="url(#palmTrunks)" strokeLinecap="round" strokeWidth="7">
      <path d="M60 55 C54 73, 47 90, 40 110" />
      <path d="M60 55 C66 73, 73 90, 80 110" />
    </g>

    <g stroke="#84cc16" strokeWidth="1.6" opacity="0.55">
      <line x1="53" y1="72" x2="58" y2="69" />
      <line x1="49" y1="82" x2="55" y2="78" />
      <line x1="45" y1="94" x2="51" y2="90" />
      <line x1="67" y1="72" x2="72" y2="75" />
      <line x1="71" y1="84" x2="77" y2="88" />
      <line x1="75" y1="96" x2="81" y2="100" />
    </g>
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    firstMenuLinkRef.current?.focus();

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen && wasMenuOpenRef.current) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3 text-lg font-bold text-primary md:text-xl" aria-label="Ir al inicio">
          <PalmLogo />
          <span>Vivero Rabadán Ayuso</span>
        </a>
        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 hover:text-primary lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          aria-controls="mobile-navigation-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 lg:flex">
          {menuItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/34983222120"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary"
        >
          Contactar por WhatsApp
        </a>
      </div>
      {isMenuOpen && (
        <div className="border-t border-slate-200/70 bg-white px-4 py-4 shadow-sm lg:hidden">
          <nav id="mobile-navigation-menu" className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                ref={index === 0 ? firstMenuLinkRef : null}
                className="rounded-md px-2 py-2 transition hover:bg-slate-100 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
