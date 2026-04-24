import exterior from '../../photos/exterior.webp';
import interior from '../../photos/interior.webp';
import ara7269 from '../../photos/ARA7269.webp';
import diseno from '../../photos/diseño.webp';
import invernadero from '../../photos/invernadero.webp';
import verdes from '../../photos/verdes.webp';
import marmolina from '../../photos/marmolina.webp';
import sombreo from '../../photos/sombreo.webp';

// Catálogo editable de servicios del vivero para renderizar tarjetas con imágenes locales.
export const services = [
  {
    id: 1,
    title: 'Venta de plantas de exterior',
    description: 'Árboles, arbustos y planta ornamental adaptada al clima de Valladolid.',
    icon: '🌳',
    image: exterior,
  },
  {
    id: 2,
    title: 'Venta de plantas de interior',
    description: 'Plantas de interior para hogares, oficinas y espacios comerciales.',
    icon: '🪴',
    image: interior,
  },
  {
    id: 3,
    title: 'Planta de temporada',
    description: 'Producción continua en invernadero para cada estación del año.',
    icon: '🌸',
    image: ara7269,
  },
  {
    id: 4,
    title: 'Jardinería integral',
    description: 'Diseño, ejecución y mantenimiento de jardines en Valladolid.',
    icon: '🧑‍🌾',
    image: diseno,
  },
  {
    id: 5,
    title: 'Productos fitosanitarios',
    description: 'Soluciones para cuidado y protección de plantas en cada etapa.',
    icon: '🧪',
    image: invernadero,
  },
  {
    id: 6,
    title: 'Centros de planta viva',
    description: 'Composiciones naturales para decoración de eventos y espacios.',
    icon: '🌿',
    image: verdes,
  },
  {
    id: 7,
    title: 'Macetas, cestas y jardineras',
    description: 'Complementos prácticos y decorativos para interior y exterior.',
    icon: '🧺',
    image: marmolina,
  },
  {
    id: 8,
    title: 'Planta de huerta',
    description: 'Variedades de huerta para cultivo doméstico y profesional.',
    icon: '🥬',
    image: sombreo,
  },
];
