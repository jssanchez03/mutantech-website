const Footer = () => (
  <>
    {/* Llamada a la acción al final */}
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">
          ¿Listo para dar el siguiente paso?
        </h2>
        <p className="text-xl text-white mb-8">
          Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos
        </p>
        <a href="#contacto">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-300">
            Contactar Ahora
          </button>
        </a>
      </div>
    </section>
    <div className="w-full bg-white/80 backdrop-blur-md shadow-inner py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-700 font-medium">© {new Date().getFullYear()} MutanTech. Todos los derechos reservados.</span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#hero" className="text-indigo-600 hover:underline">Inicio</a>
          <a href="#servicios" className="text-indigo-600 hover:underline">Servicios</a>
          <a href="#portafolio" className="text-indigo-600 hover:underline">Portafolio</a>
          <a href="#contacto" className="text-indigo-600 hover:underline">Contacto</a>
        </div>
      </div>
    </div>
  </>
);

export default Footer;