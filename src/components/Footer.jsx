const year = new Date().getFullYear();

const Footer = ({ onOpenLegalNotice, onOpenPrivacyPolicy }) => (
  <footer className="bg-slate-900 py-10 text-slate-200">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <p className="text-lg font-semibold">Vivero Rabadán Ayuso</p>
        <p className="text-sm text-slate-400">Vivero en Valladolid · Plantas de exterior e interior · Jardinería</p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a
          href="https://www.facebook.com/viverosrabadanayuso/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar el perfil oficial de Vivero Rabadán Ayuso en Facebook (se abre en una pestaña nueva)"
          className="hover:text-white"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/viverorabadanayuso/?hl=es"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visitar el perfil oficial de Vivero Rabadán Ayuso en Instagram (se abre en una pestaña nueva)"
          className="hover:text-white"
        >
          Instagram
        </a>
        <a
          href="https://wa.me/34983222120"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar con Vivero Rabadán Ayuso por WhatsApp (se abre en una pestaña nueva)"
          className="hover:text-white"
        >
          WhatsApp
        </a>
        <button type="button" onClick={onOpenLegalNotice} className="hover:text-white">Aviso legal</button>
        <button type="button" onClick={onOpenPrivacyPolicy} className="hover:text-white">Política de privacidad</button>
      </div>
    </div>
    <p className="mt-6 text-center text-xs text-slate-500">© {year} Vivero Rabadán Ayuso. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
