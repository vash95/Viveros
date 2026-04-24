// Resumen visual de instalaciones y capacidad de producción del vivero.
const items = [
  'Tienda de atención y venta al público',
  'Invernadero de plantas de interior de más de 250 m²',
  '1.000 m² de plantas de exterior',
  'Invernaderos de producción de planta de temporada de más de 2.000 m²',
];

const Installations = () => (
  <section id="instalaciones" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
    <div className="card grid overflow-hidden md:grid-cols-2">
      <img
        src="https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=1200&q=80"
        alt="Instalaciones del vivero"
        className="h-full min-h-80 w-full object-cover"
        loading="lazy"
      />
      <div className="p-8 md:p-10">
        <h2 className="section-title">Instalaciones</h2>
        <ul className="mt-6 space-y-3 text-slate-700">
          {items.map((item) => (
            <li key={item} className="flex gap-3"><span className="mt-1 text-primary">✔</span><span>{item}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Installations;
