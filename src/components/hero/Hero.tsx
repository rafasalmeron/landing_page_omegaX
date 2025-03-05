'use client';

import { motion } from 'framer-motion';
import Form from '@/components/customForm/CustomForm';

const Hero = () => {
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

      <Form />
    </section>
  );
};

export default Hero;
