import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });
	const [sent, setSent] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSent(true);
			setForm({ name: '', email: '', message: '' });
		}, 1500);
	};

	return (
		
			<section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 py-16">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8"
				>
					<motion.h2
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 0.6 }}
						className="text-3xl font-bold text-indigo-700 mb-2 text-center"
					>
						Contáctanos
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 0.6 }}
						className="text-gray-600 mb-8 text-center"
					>
						¿Tienes un proyecto o una idea? ¡Hablemos!
					</motion.p>
					{sent ? (
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="text-green-600 text-center text-lg font-semibold py-8"
						>
							¡Gracias por contactarnos! Te responderemos pronto.
						</motion.div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-6">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.4, duration: 0.5 }}
							>
								<label className="block text-gray-700 font-medium mb-1">Nombre</label>
								<input
									type="text"
									name="name"
									value={form.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
									placeholder="Tu nombre"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5, duration: 0.5 }}
							>
								<label className="block text-gray-700 font-medium mb-1">Correo electrónico</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
									placeholder="tucorreo@email.com"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6, duration: 0.5 }}
							>
								<label className="block text-gray-700 font-medium mb-1">Mensaje</label>
								<textarea
									name="message"
									value={form.message}
									onChange={handleChange}
									required
									rows={4}
									className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition resize-none"
									placeholder="Cuéntanos sobre tu proyecto..."
								/>
							</motion.div>
							<motion.button
								whileHover={{ scale: 1.04 }}
								whileTap={{ scale: 0.97 }}
								type="submit"
								disabled={loading}
								className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
							>
								{loading ? 'Enviando...' : 'Enviar mensaje'}
							</motion.button>
						</form>
					)}
				</motion.div>
			</section>
		
	);
};

export default Contact;
