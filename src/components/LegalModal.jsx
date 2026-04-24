const legalContent = {
  legal: {
    title: 'Aviso legal',
    paragraphs: [
      'Titular: Vivero Rabadán Ayuso.',
      'Dirección: Valladolid, España.',
      'Contacto: 983 222 120.',
      'El uso de este sitio implica la aceptación de las condiciones de uso y de la normativa vigente.',
    ],
  },
  privacy: {
    title: 'Política de privacidad y cookies',
    paragraphs: [
      'Responsable del tratamiento: Vivero Rabadán Ayuso.',
      'Finalidad: atender solicitudes realizadas desde el formulario de contacto y gestionar la relación comercial.',
      'Legitimación: consentimiento de la persona interesada.',
      'Gestión de cookies por categorías: técnicas (siempre activas), preferencias y analíticas (opcionales).',
      'Las cookies analíticas solo se instalan y ejecutan tras un consentimiento explícito en el banner de cookies.',
      'Conservación del consentimiento: la selección por categorías se almacena en localStorage para recordar tus preferencias.',
      'Puedes rechazar cookies opcionales o cambiar la configuración cuando se vuelva a mostrar el panel de cookies.',
      'Derechos: acceso, rectificación, supresión y demás derechos de protección de datos mediante solicitud al contacto indicado en esta web.',
    ],
  },
};

const LegalModal = ({ type, onClose }) => {
  const selectedContent = legalContent[type];

  if (!selectedContent) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
      <div className="w-full max-w-2xl rounded-xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-semibold text-slate-900">{selectedContent.title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Cerrar
          </button>
        </div>
        <div className="space-y-3 text-sm leading-relaxed text-slate-700">
          {selectedContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
