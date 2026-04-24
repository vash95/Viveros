// Bloque de novedades preparado para añadir nuevos avisos manualmente en el array.
const updates = [
  {
    id: 1,
    title: 'Ya disponemos de plantas de temporada',
    text: 'Producción propia en nuestros invernaderos para garantizar calidad y adaptación climática.',
  },
  {
    id: 2,
    title: '⭐ Últimas reseñas en Google',
    text: 'Consulta las reseñas más recientes directamente en Google para ver valoraciones actualizadas de nuestros clientes.',
    link: 'https://www.google.com/search?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid+rese%C3%B1as',
    linkLabel: 'Ver reseñas recientes',
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
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 font-semibold text-white hover:bg-secondary"
            >
              {item.linkLabel}
            </a>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default News;
