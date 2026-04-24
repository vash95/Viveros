import { useMemo, useState } from 'react';
import placeholderImage from '../assets/images/placeholder.svg';
import { galleryItems } from '../data/gallery';

// Galería con filtros para clasificar imágenes por tipo de contenido.
const filters = ['Todo', 'Jardines', 'Instalaciones', 'Plantas'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('Todo');

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Todo') return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="galeria" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="section-title text-center">Galería</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter ? 'bg-primary text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article key={item.id} className="group relative overflow-hidden rounded-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                width="1000"
                height="667"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = placeholderImage;
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <p className="text-xs uppercase tracking-wide text-emerald-200">{item.category}</p>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
