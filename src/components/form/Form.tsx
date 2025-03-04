'use client';

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Form = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    };

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('Enviado com sucesso!');
        form.reset();
      } else {
        setFormStatus('Email já cadastrado.');
      }
    } catch {
      setFormStatus('Erro ao conectar com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: 'easeOut' }}
      onSubmit={handleSubmit}
      className="mt-8 p-3 max-w-3xl mx-auto rounded-lg"
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
        <label
          htmlFor="phone"
          className="mt-2 text-lg font-semibold text-gray-900 dark:text-white"
        >
          Seu Telefone
        </label>
        <input
          id="phone"
          type="phone"
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
        className="bg-blue-500 justify-self-center text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition flex items-center justify-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          'Enviar Mensagem'
        )}
      </button>

      {formStatus && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className={`mt-4 ${formStatus.includes('sucesso') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
        >
          {formStatus}
        </motion.p>
      )}
    </motion.form>
  );
};

export default Form;
