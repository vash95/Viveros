import exterior2 from '../../photos/exterior2.webp';

// Resumen visual de instalaciones y capacidad de producción del vivero.
const items = [
  {
    title: 'Tienda de atención y venta al público',
    description:
      'Espacio con asesoramiento personalizado, exposición de plantas y materiales para jardinería doméstica y profesional.',
  },
  {
    title: 'Invernadero de plantas de interior de más de 250 m²',
    description:
      'Zona climatizada para especies tropicales y de sombra, con control de humedad y rotación semanal de ejemplares.',
  },
  {
    title: 'Más de 1.000 m² de plantas de exterior',
    description:
      'Áreas divididas por uso (ornamental, setos, aromáticas y arbustivas) para facilitar la elección según temporada.',
  },
  {
    title: 'Invernaderos de producción de temporada de más de 2.000 m²',
    description:
      'Superficie destinada al cultivo continuo con planificación estacional para garantizar stock durante todo el año.',
  },
];

const highlights = [
  { value: '+3.250 m²', label: 'de superficie productiva' },
  { value: '12 meses', label: 'de producción escalonada' },
  { value: 'Asesoría', label: 'técnica para particulares y profesionales' },
];

const Installations = () => (
  <section id="instalaciones" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
    <div className="card grid overflow-hidden md:grid-cols-2">
      <img
        src={exterior2}
        alt="Instalaciones del vivero"
        className="h-full min-h-80 w-full object-cover"
        loading="lazy"
      />
      <div className="p-8 md:p-10">
        <h2 className="section-title">Instalaciones</h2>
        <p className="mt-4 text-slate-700">
          Contamos con una infraestructura preparada para acompañar todo el ciclo de cultivo: desde la
          producción en vivero hasta la atención directa al cliente en tienda.
        </p>

        <ul className="mt-6 space-y-4 text-slate-700">
          {items.map((item) => (
            <li key={item.title} className="flex gap-3">
              <span className="mt-1 text-primary">✔</span>
              <div>
                <p className="font-medium text-slate-900">{item.title}</p>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.value} className="rounded-xl bg-slate-100 p-3 text-center">
              <p className="text-lg font-semibold text-slate-900">{item.value}</p>
              <p className="text-xs text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Installations;
