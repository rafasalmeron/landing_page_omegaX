'use client';

import { motion } from 'framer-motion';
import { featuresCards } from '@/components/features/featuresCards';

const Features = () => {
  return (
    <motion.section
      id="funcionalidade"
      className="py-16 px-6 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        Funcionalidades
        <span className="text-blue-500"> Poderosas</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        Nosso SaaS oferece uma gama de funcionalidades que ajudam pequenos
        negócios a otimizar sua gestão de estoque, pedidos e vendas. Veja
        algumas das principais funcionalidades do sistema.
      </motion.p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuresCards.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: index * 0.2 + 0.3,
              duration: 0.5,
              ease: 'easeOut',
            }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {item.description}
            </p>
            <div className="mt-4 grid gap-2">
              {item.extra.map((extraItem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.2 + i * 0.1 + 0.5,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                  className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <p className="text-gray-900 dark:text-white">{extraItem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Features;
