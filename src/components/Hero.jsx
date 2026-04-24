import principalImage from '../../photos/about-1.webp';

const highlights = [
  { label: 'Años de experiencia', value: '+25' },
  { label: 'Especies disponibles', value: '+500' },
  { label: 'Proyectos al año', value: '+120' },
];

// Hero principal orientado a conversión y posicionamiento local SEO.
const Hero = () => (
  <section
    id="inicio"
    className="relative isolate flex min-h-screen items-center overflow-hidden bg-slate-900 pt-24"
  >
    <img
      src={principalImage}
      alt="Instalaciones del Vivero Rabadán Ayuso"
      className="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      fetchPriority="high"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/65 to-slate-950/85" />
    <div className="absolute -left-16 top-24 h-56 w-56 rounded-full bg-primary/40 blur-3xl" aria-hidden="true" />
    <div className="absolute -right-20 bottom-20 h-64 w-64 rounded-full bg-secondary/35 blur-3xl" aria-hidden="true" />

    <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-4 pb-10 text-white md:px-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
      <div>
        <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
          🌿 Especialistas en jardinería y paisajismo en Valladolid
        </span>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Creamos espacios verdes que se disfrutan todo el año
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-100/95 md:text-xl">
          En <strong>Vivero Rabadán Ayuso</strong> combinamos producción propia, diseño a medida y mantenimiento
          profesional para que tu jardín luzca espectacular desde el primer día.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#servicios"
            className="rounded-full bg-primary px-7 py-3 font-semibold text-white shadow-lg shadow-primary/40 transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            Descubrir servicios
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-slate-900"
          >
            Pedir asesoramiento
          </a>
        </div>
      </div>

      <aside className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl shadow-slate-900/40 backdrop-blur-md md:p-7">
        <h2 className="text-xl font-semibold">Tu vivero de confianza</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-100/90">
          Te acompañamos en cada etapa del proyecto, desde la elección de plantas hasta el mantenimiento periódico.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/20 bg-slate-950/30 px-4 py-3">
              <p className="text-2xl font-bold text-emerald-300">{item.value}</p>
              <p className="mt-1 text-sm text-slate-100/90">{item.label}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  </section>
);

export default Hero;
