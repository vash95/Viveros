// Sección corporativa para presentar trayectoria y propuesta de valor del vivero.
const stats = [
  { label: 'Generaciones', value: '3' },
  { label: 'Instalaciones', value: '50.000 m²' },
  { label: 'Producción', value: 'Propia' },
  { label: 'Asesoramiento', value: 'Especializado' },
];

const About = () => (
  <section id="conocenos" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
    <div className="grid gap-10 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="section-title">Conócenos</h2>
        <p className="mt-6 text-lg leading-relaxed text-slate-700">
          Somos una empresa familiar de jardinería en Valladolid con tres generaciones dedicadas a la venta y
          producción de plantas de exterior e interior. Cultivamos con criterios locales para ofrecer especies adaptadas
          al clima de Valladolid y acompañamos a cada cliente con asesoramiento cercano y profesional.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-700">
          Además, desarrollamos proyectos completos de diseño, ejecución y mantenimiento de jardines para particulares y
          administraciones, con experiencia en obras públicas de referencia como Plaza Portugalete, Fuente Dorada y
          María Molina.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <article key={stat.label} className="card p-4 text-center sm:p-6">
            <p className="text-2xl font-bold leading-tight text-primary break-words sm:text-3xl">{stat.value}</p>
            <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base">{stat.label}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
