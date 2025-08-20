import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Transformamos Ideas en Realidad Digital
                        </h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Desarrollo de software innovador y soluciones tecnológicas a medida
                        </p>
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300">
                            Comenzar Proyecto
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Servicios Destacados */}
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
                                <div className="text-indigo-600 mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Llamada a la acción */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        ¿Listo para dar el siguiente paso?
                    </h2>
                    <p className="text-xl text-white mb-8">
                        Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
                    </p>
                    <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300">
                        Contactar Ahora
                    </button>
                </div>
            </section>
        </div>
    );
};

// Datos de servicios
const services = [
    {
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        title: "Desarrollo Web",
        description: "Creamos sitios web modernos y responsivos utilizando las últimas tecnologías.",
    },
    {
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
        title: "Desarrollo Móvil",
        description: "Aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    },
    {
        icon: (
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Ciberseguridad",
        description: "Protección y seguridad para tus aplicaciones y sistemas empresariales.",
    },
];

export default Home;