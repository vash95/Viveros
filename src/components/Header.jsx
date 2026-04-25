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
    aria-label="Logotipo de dos palmeras con troncos en forma de V curva"
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
      <path d="M42 56 C26 42, 16 38, 6 40 C18 49, 28 56, 39 62 Z" />
      <path d="M42 56 C34 34, 35 22, 42 16 C49 24, 50 38, 46 60 Z" />
      <path d="M42 56 C53 35, 66 30, 78 34 C67 45, 56 53, 45 61 Z" />
      <path d="M42 58 C26 56, 16 62, 8 72 C20 72, 30 69, 40 64 Z" />
      <path d="M42 58 C56 54, 68 59, 77 68 C64 69, 53 66, 44 63 Z" />

      <path d="M78 56 C63 42, 52 38, 42 40 C54 49, 64 56, 75 62 Z" />
      <path d="M78 56 C70 34, 71 22, 78 16 C84 24, 85 38, 81 60 Z" />
      <path d="M78 56 C90 35, 103 30, 114 34 C104 45, 93 53, 82 61 Z" />
      <path d="M78 58 C63 56, 52 62, 44 72 C56 72, 67 69, 76 64 Z" />
      <path d="M78 58 C93 54, 104 59, 113 68 C100 69, 89 66, 80 63 Z" />
    </g>

    <g fill="none" stroke="url(#palmTrunks)" strokeLinecap="round" strokeWidth="7">
      <path d="M60 108 C49 95, 43 78, 42 58" />
      <path d="M60 108 C71 95, 77 78, 78 58" />
    </g>

    <g stroke="#84cc16" strokeWidth="1.6" opacity="0.55">
      <line x1="54" y1="96" x2="50" y2="93" />
      <line x1="50" y1="86" x2="46" y2="82" />
      <line x1="46" y1="74" x2="42" y2="70" />
      <line x1="66" y1="96" x2="70" y2="93" />
      <line x1="70" y1="86" x2="74" y2="82" />
      <line x1="74" y1="74" x2="78" y2="70" />
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
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-secondary lg:hidden"
          aria-label="Contactar por WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M20.52 3.48A11.87 11.87 0 0 0 12.05 0 11.94 11.94 0 0 0 1.73 17.99L0 24l6.17-1.62A11.94 11.94 0 0 0 12.05 24h.01A11.95 11.95 0 0 0 24 12.05a11.86 11.86 0 0 0-3.48-8.57Zm-8.46 18.5h-.01a9.93 9.93 0 0 1-5.06-1.38l-.36-.21-3.66.96.98-3.57-.24-.37a9.9 9.9 0 0 1-1.54-5.29C2.17 6.68 6.61 2.24 12.06 2.24a9.78 9.78 0 0 1 6.99 2.9 9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.42c-.3-.15-1.75-.86-2.03-.96-.28-.11-.48-.15-.69.15-.2.29-.79.95-.96 1.14-.18.2-.36.22-.67.07-.3-.15-1.29-.47-2.45-1.5-.91-.8-1.52-1.78-1.7-2.08-.18-.31-.02-.48.13-.63.14-.14.3-.36.44-.54.15-.18.2-.3.3-.5.1-.21.05-.39-.02-.54-.08-.15-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53l-.58-.01c-.2 0-.54.08-.82.39-.28.3-1.08 1.06-1.08 2.58 0 1.51 1.11 2.98 1.26 3.19.15.2 2.16 3.31 5.24 4.64.73.32 1.3.51 1.74.65.73.23 1.4.2 1.92.12.59-.09 1.75-.71 2-1.39.25-.68.25-1.26.18-1.38-.08-.12-.28-.19-.58-.34Z" />
          </svg>
        </a>
        <a
          href="https://wa.me/34983222120"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary lg:inline-flex"
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
