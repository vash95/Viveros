import { useEffect, useRef, useState } from 'react';

// Sección de contacto con accesos directos a llamada, WhatsApp, correo y ubicación.
const Contact = () => {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isEmailModalOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsEmailModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isEmailModalOpen]);

  return (
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
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+34983222120" className="rounded-full bg-primary px-5 py-2 font-semibold text-white hover:bg-secondary">Llamar</a>
              <a href="https://wa.me/34983222120" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-600 px-5 py-2 font-semibold text-white hover:bg-emerald-700">WhatsApp</a>
              <a href="https://maps.google.com/?q=Vivero+Rabad%C3%A1n+Ayuso+Valladolid" target="_blank" rel="noreferrer" className="rounded-full bg-earth px-5 py-2 font-semibold text-white hover:brightness-110">Cómo llegar</a>
              <button
                type="button"
                onClick={() => setIsEmailModalOpen(true)}
                className="rounded-full bg-slate-800 px-5 py-2 font-semibold text-white hover:bg-slate-900"
              >
                Enviar email
              </button>
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

      {isEmailModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-email-modal-title"
            className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 id="contact-email-modal-title" className="text-2xl font-semibold text-slate-900">
                Enviar email
              </h3>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsEmailModalOpen(false)}
                className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                Cerrar
              </button>
            </div>

            <form
              action="mailto:viverosrabadan@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4 text-sm text-slate-700"
            >
              <label className="block">
                <span className="mb-1 block font-medium text-slate-900">Nombre</span>
                <input
                  type="text"
                  name="nombre"
                  required
                  minLength={2}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="mb-1 block font-medium text-slate-900">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="mb-1 block font-medium text-slate-900">Asunto</span>
                <input
                  type="text"
                  name="asunto"
                  required
                  minLength={3}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="block">
                <span className="mb-1 block font-medium text-slate-900">Mensaje</span>
                <textarea
                  name="mensaje"
                  rows={5}
                  required
                  minLength={10}
                  className="w-full rounded-md border border-slate-300 px-3 py-2 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>

              <label className="flex items-start gap-2">
                <input
                  type="checkbox"
                  name="aceptacion_privacidad"
                  value="aceptado"
                  required
                  className="mt-1"
                />
                <span>
                  Acepto la política de privacidad para el tratamiento de mis datos.
                </span>
              </label>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEmailModalOpen(false)}
                  className="rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 font-semibold text-white transition hover:bg-secondary"
                >
                  Abrir cliente de correo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
