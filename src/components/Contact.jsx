// Sección de contacto con accesos directos a llamada, WhatsApp, correo y ubicación.
const GOOGLE_MAPS_URL = 'https://maps.google.com/?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid';
const GOOGLE_REVIEWS_URL = 'https://maps.google.com/?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid';

const Contact = () => (
  <section id="contacto" className="bg-white py-20">
    <div className="mx-auto max-w-7xl px-4 md:px-6">
      <h2 className="section-title text-center">Contacto</h2>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="card p-8">
          <h3 className="text-2xl font-semibold text-primary">Datos de contacto</h3>
          <div className="mt-5 space-y-5 text-slate-700">
            <p><strong>Dirección:</strong><br />Camino viejo de Simancas km 3,2<br />Valladolid 47008<br />Frente al bar El Barrio y al lado de la tienda de muebles Abrevadero</p>
            <p><strong>Horario:</strong><br />Lunes a sábado: 09:00 - 14:00 y 16:00 - 20:00<br />Domingo: 09:00 - 14:00</p>
            <p><strong>Teléfonos:</strong><br />Tienda: <a className="text-primary" href="tel:+34983222120">+34 983 22 21 20</a><br />Invernadero y Jardinería: <a className="text-primary" href="tel:+34983279930">+34 983 27 99 30</a></p>
            <p><strong>Email:</strong> <a className="text-primary" href="mailto:viverosrabadan@gmail.com">viverosrabadan@gmail.com</a></p>
          </div>

          <div className="card mt-8 p-5" aria-label="Valoración y reseñas de clientes">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Valoración de clientes</p>
            <div className="mt-3 flex items-end gap-3">
              <p className="text-3xl font-bold text-slate-900">4,8/5</p>
              <p className="text-sm text-slate-600">Más de 200 reseñas en Google</p>
            </div>
            <p className="mt-3 text-slate-700">Más de 200 clientes satisfechos ya han confiado en Viveros Rabadán Ayuso para sus plantas y jardines.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:+34983222120" className="rounded-full bg-primary px-5 py-2 font-semibold text-white hover:bg-secondary">Llamar</a>
            <a href="https://wa.me/34983222120" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="rounded-full bg-earth px-5 py-2 font-semibold text-white hover:brightness-110">Cómo llegar</a>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer" className="rounded-full border border-primary px-5 py-2 font-semibold text-primary hover:bg-primary hover:text-white">Ver reseñas</a>
          </div>
        </article>

        <article className="card overflow-hidden">
          <h3 className="sr-only">Mapa de ubicación</h3>
          <iframe
            title="Mapa Vivero Rabadán Ayuso"
            src="https://www.google.com/maps?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid&output=embed"
            className="h-full min-h-[450px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </div>
    </div>
  </section>
);

export default Contact;
