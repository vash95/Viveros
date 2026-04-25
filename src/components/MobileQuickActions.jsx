const actions = [
  {
    label: 'Llamar',
    href: 'tel:+34983222120',
    className: 'bg-primary text-white active:bg-secondary',
    ariaLabel: 'Llamar a Vivero Rabadán Ayuso',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/34983222120',
    className: 'bg-emerald-600 text-white active:bg-emerald-700',
    ariaLabel: 'Contactar por WhatsApp con Vivero Rabadán Ayuso',
  },
  {
    label: 'Reseña',
    href: 'https://www.google.com/search?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid+rese%C3%B1as',
    className: 'bg-earth text-white active:brightness-110',
    ariaLabel: 'Leer reseñas en Google de Vivero Rabadán Ayuso',
  },
];

const MobileQuickActions = () => (
  <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-3 py-3 shadow-[0_-8px_30px_rgba(15,23,42,0.16)] backdrop-blur sm:hidden">
    <nav aria-label="Acciones rápidas" className="mx-auto grid max-w-7xl grid-cols-3 gap-2">
      {actions.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.href.startsWith('http') ? '_blank' : undefined}
          rel={action.href.startsWith('http') ? 'noreferrer noopener' : undefined}
          aria-label={action.ariaLabel}
          className={`flex min-h-12 items-center justify-center rounded-xl px-2 text-sm font-semibold shadow-sm transition ${action.className}`}
        >
          {action.label}
        </a>
      ))}
    </nav>
  </div>
);

export default MobileQuickActions;
