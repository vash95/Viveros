const year = new Date().getFullYear();

const Footer = ({ onOpenLegalNotice, onOpenPrivacyPolicy }) => (
  <footer className="bg-slate-900 py-10 text-slate-200">
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div>
        <p className="text-lg font-semibold">Vivero Rabadán Ayuso</p>
        <p className="text-sm text-slate-400">Vivero en Valladolid · Plantas de exterior e interior · Jardinería</p>
      </div>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
        <a href="https://wa.me/34983222120" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
        <a
          href="https://www.linkedin.com/in/borja-rabad%C3%A1n-mart%C3%ADn-7569abb9/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white"
        >
          LinkedIn del creador
        </a>
        <button type="button" onClick={onOpenLegalNotice} className="hover:text-white">Aviso legal</button>
        <button type="button" onClick={onOpenPrivacyPolicy} className="hover:text-white">Política de privacidad</button>
      </div>
    </div>
    <p className="mt-6 text-center text-xs text-slate-500">© {year} Vivero Rabadán Ayuso. Todos los derechos reservados.</p>
  </footer>
);

export default Footer;
