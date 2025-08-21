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


            
        </div>
    );
};

export default Home;