import { motion } from 'framer-motion';
import logoWeb from '../assets/logo_web.gif';
import logoMovil from '../assets/logo_movil.gif';
import logoMedida from '../assets/logo_medida.gif';

const services = [
  {
    icon: (
      <img src={logoWeb} alt="Web" className="w-12 h-12 mb-2 object-contain" />
    ),
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
  },
  {
    icon: (
      <img src={logoMovil} alt="Móvil" className="w-12 h-12 mb-2 object-contain" />
    ),
    title: "Desarrollo Móvil",
    description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
  },
  {
    icon: (
      <img src={logoMedida} alt="Software a medida" className="w-12 h-12 mb-2 object-contain" />
    ),
    title: "Software a medida",
    description: "Soluciones personalizadas que se adaptan a las necesidades específicas de tu negocio.",
  },
];

const Services = () => (
  <section className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Nuestros Servicios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4 flex items-center">
              <div className="mr-3">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
