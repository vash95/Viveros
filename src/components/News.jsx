// Bloque de novedades preparado para añadir nuevos avisos manualmente en el array.
const updates = [
  {
    id: 1,
    title: 'Ya disponemos de plantas de temporada',
    text: 'Producción propia en nuestros invernaderos para garantizar calidad y adaptación climática.',
  },
];

const News = () => (
  <section id="novedades" className="mx-auto max-w-7xl px-4 py-20 md:px-6">
    <h2 className="section-title text-center">Novedades</h2>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {updates.map((item) => (
        <article key={item.id} className="card border-l-8 border-primary p-8">
          <h3 className="text-2xl font-semibold text-primary">{item.title}</h3>
          <p className="mt-3 text-slate-700">{item.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default News;
