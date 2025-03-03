'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
      >
        Fale <span className="text-blue-500">Conosco</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        Entre em contato comigo através das minhas redes sociais ou e-mail.
      </motion.p>

      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/rafasalmeron"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-blue-500 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rafasalmeron/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 dark:text-white hover:text-blue-500 text-3xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:rafasalmeronjr@gmail.com"
          className="text-gray-900 dark:text-white hover:text-blue-500 text-3xl"
        >
          <FaEnvelope />
        </a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        className="mt-16 p-6 max-w-4xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
      >
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sobre o Desenvolvedor
        </h3>
        <p className="mt-4 font-poppins text-lg text-gray-700 dark:text-gray-300">
          Olá, meu nome é <strong>Rafael T. Salmeron</strong>, sou um
          desenvolvedor full-stack com experiência em React, Next.js, NestJS e
          outras tecnologias modernas. Atualmente, estou criando soluções para
          pequenos negócios com foco em eficiência e escalabilidade. Se precisar
          de um desenvolvedor para seu projeto ou quiser trocar ideias, estou à
          disposição!
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
