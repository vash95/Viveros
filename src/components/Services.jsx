import placeholderImage from '../assets/images/placeholder.svg';
import { services } from '../data/services';

// Tarjetas de servicios renderizadas desde datos para facilitar mantenimiento futuro.
const Services = () => (
  <section id="servicios" className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <h2 className="section-title text-center">Servicios</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
        Soluciones completas en plantas, jardinería y mantenimiento para hogares, empresas y obra pública en Valladolid.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {services.map((service) => (
          <article key={service.id} className="card overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="h-40 w-full object-cover"
              width="900"
              height="600"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = placeholderImage;
              }}
            />
            <div className="p-5">
              <p className="text-2xl" aria-hidden="true">{service.icon}</p>
              <h3 className="mt-2 text-lg font-semibold text-primary">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
