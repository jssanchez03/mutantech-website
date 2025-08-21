
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed w-full z-50">
            {/* Efecto glassmorphism */}
            <div className="backdrop-blur-md bg-white/70 shadow-lg">
                <div className="max-w-[1800px] mx-auto px-8">
                    <div className="flex justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-3xl font-bold font-montserrat bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
                            >
                                MutanTech
                            </button>
                        </div>
                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center">
                            <div className="ml-16 flex items-center space-x-12">
                                <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-indigo-600 relative group">
                                    <span className="text-lg">Inicio</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                                <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-indigo-600 relative group">
                                    <span className="text-lg">Servicios</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                                <button onClick={() => scrollToSection('portafolio')} className="text-gray-700 hover:text-indigo-600 relative group">
                                    <span className="text-lg">Portafolio</span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
                                </button>
                                <button
                                    onClick={() => scrollToSection('contacto')}
                                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                                >
                                    Contáctanos
                                </button>
                            </div>
                        </div>
                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden backdrop-blur-md bg-white/70">
                    <div className="px-4 pt-2 pb-3 space-y-2">
                        <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-300">
                            Inicio
                        </button>
                        <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-300">
                            Servicios
                        </button>
                        <button onClick={() => scrollToSection('portafolio')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all duration-300">
                            Portafolio
                        </button>
                        <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-4 py-3 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-300">
                            Contáctanos
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;