'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Enviado com sucesso!');
  };

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center py-28 text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.3 }}
        className="mt-6 max-w-3xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        >
          Gerencie seu estoque de forma
          <span className="text-blue-500"> inteligente</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
        >
          Controle seu estoque, pedidos e vendas com facilidade e eficiência.
        </motion.p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
        onSubmit={handleSubmit}
        className="mt-8 p-3 max-w-3xl mx-auto rounded-lg "
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Pronto para transformar sua gestão de estoque?
        </h2>
        <span className="mt-2 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Vamos conversar!
        </span>

        <div className="flex flex-col mt-6 mb-4">
          <label
            htmlFor="name"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Seu Nome
          </label>
          <input
            id="name"
            type="text"
            className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="email"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Seu Email
          </label>
          <input
            id="email"
            type="email"
            className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="message"
            className="text-lg font-semibold text-gray-900 dark:text-white"
          >
            Sua Mensagem
          </label>
          <textarea
            id="message"
            className="mt-2 p-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Enviar Mensagem
        </button>

        {formStatus && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 text-green-600 dark:text-green-400"
          >
            {formStatus}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
};

export default Hero;
