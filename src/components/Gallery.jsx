import { useEffect, useMemo, useState } from 'react';
import { galleryItems } from '../data/gallery';

// Galería tipo carrusel con filtros para clasificar imágenes por tipo de contenido.
const allFilter = 'Todo';
const filters = [allFilter, ...Array.from(new Set(galleryItems.map((item) => item.category)))];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState(allFilter);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === allFilter) return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const totalItems = filteredItems.length;
  const currentIndex = totalItems ? Math.min(activeIndex, totalItems - 1) : 0;
  const currentItem = filteredItems[currentIndex] ?? null;

  useEffect(() => {
    setActiveIndex(0);
  }, [activeFilter]);

  const goToPrevious = () => {
    if (!totalItems) return;
    setActiveIndex((currentIndex) => (currentIndex === 0 ? totalItems - 1 : currentIndex - 1));
  };

  const goToNext = () => {
    if (!totalItems) return;
    setActiveIndex((currentIndex) => (currentIndex + 1) % totalItems);
  };

  useEffect(() => {
    const handleKeyboard = (event) => {
      if (selectedItem) {
        if (event.key === 'Escape') {
          setSelectedItem(null);
        }
        return;
      }

      if (event.key === 'ArrowLeft') {
        goToPrevious();
      }

      if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyboard);

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [selectedItem, totalItems]);

  const isEmpty = totalItems === 0;

  return (
    <section id="galeria" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title text-center">Galería</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Recorre nuestras fotografías en formato carrusel y filtra por tipo de imagen para encontrar inspiración
          rápidamente.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3" aria-label="Filtrar galería por tipo de foto">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
              aria-pressed={activeFilter === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        {isEmpty ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-10 text-center">
            <p className="text-slate-700">No hay imágenes disponibles para esta categoría.</p>
            <button
              type="button"
              onClick={() => setActiveFilter(allFilter)}
              className="mt-4 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Volver a Todo
            </button>
          </div>
        ) : (
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-card">
              <button
                type="button"
                onClick={() => setSelectedItem(currentItem)}
                className="group block w-full"
                aria-label={`Ampliar imagen: ${currentItem.title}`}
              >
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="h-[24rem] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[34rem]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
              </button>

              <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">
                  {currentItem.category}
                </p>
                <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold md:text-4xl">{currentItem.title}</h3>
                    <p className="mt-2 text-sm text-white/85">
                      Foto {currentIndex + 1} de {totalItems} · Filtro: {activeFilter}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(currentItem)}
                    className="w-fit rounded-full bg-white/95 px-5 py-2 text-sm font-semibold text-primary transition hover:bg-white"
                  >
                    Ver ampliada
                  </button>
                </div>
              </div>

              {totalItems > 1 && (
                <>
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-primary shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Ver foto anterior"
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl font-bold text-primary shadow-lg transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Ver foto siguiente"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {totalItems > 1 && (
              <>
                <div className="mt-6 flex justify-center gap-2" aria-label="Seleccionar foto del carrusel">
                  {filteredItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 rounded-full transition ${
                        currentIndex === index ? 'w-10 bg-primary' : 'w-3 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Ir a ${item.title}`}
                      aria-current={currentIndex === index ? 'true' : undefined}
                    />
                  ))}
                </div>

                <div className="mt-6 flex gap-4 overflow-x-auto pb-2">
                  {filteredItems.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`min-w-36 overflow-hidden rounded-2xl border-2 text-left transition md:min-w-44 ${
                        currentIndex === index
                          ? 'border-primary shadow-card'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`Mostrar ${item.title}`}
                    >
                      <img src={item.image} alt="" className="h-24 w-full object-cover" loading="lazy" />
                      <span className="block bg-white px-3 py-2 text-xs font-semibold text-slate-700">{item.title}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedItem(null)}
          role="presentation"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen ampliada: ${selectedItem.title}`}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white transition hover:bg-black/80"
            >
              Cerrar
            </button>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="max-h-[90vh] w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
