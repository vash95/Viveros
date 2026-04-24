// Hero principal orientado a conversión y posicionamiento local SEO.
const Hero = () => (
  <section
    id="inicio"
    className="relative flex min-h-screen items-center justify-center bg-cover bg-center pt-24"
    style={{
      backgroundImage:
        "linear-gradient(rgba(15,23,42,.45), rgba(15,23,42,.45)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1800&q=80')",
    }}
  >
    <div className="mx-auto max-w-3xl px-4 text-center text-white md:px-6">
      <h1 className="text-4xl font-bold leading-tight md:text-6xl">Vivero Rabadán Ayuso</h1>
      <p className="mt-6 text-lg md:text-2xl">
        Venta y producción de plantas. Diseño y mantenimiento de jardines en Valladolid.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#servicios" className="rounded-full bg-primary px-6 py-3 font-semibold text-white hover:bg-secondary">
          Ver servicios
        </a>
        <a
          href="https://maps.google.com/?q=Camino+viejo+de+Simancas+km+3.2+Valladolid"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-slate-900"
        >
          Cómo llegar
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
