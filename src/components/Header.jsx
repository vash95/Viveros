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
        <a href="#inicio" className="text-lg font-bold text-primary md:text-xl">Vivero Rabadán Ayuso</a>
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
