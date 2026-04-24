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
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" className="text-lg font-bold text-primary md:text-xl">Vivero Rabadán Ayuso</a>
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
    </header>
  );
};

export default Header;
