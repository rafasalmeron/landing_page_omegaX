import Form from 'next/form';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useRef, useEffect } from 'react';
import IMask from 'imask';

const CustomForm = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      const maskOptions = {
        mask: '(00) 0 0000-0000',
      };
      const mask = IMask(phoneInputRef.current, maskOptions);

      return () => mask.destroy();
    }
  }, []);

  const handleSubmit = async (formData: FormData) => {
    setIsLoading(true);

    const phone = formData.get('phone') as string;

    // Validação de número de telefone
    const cleanedPhone = phone.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (cleanedPhone.length !== 11) {
      setFormStatus('O número de telefone deve conter 11 dígitos.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (response.ok) {
        setFormStatus('Enviado com sucesso!');
      } else {
        setFormStatus('Erro: Dados inválidos.');
      }
    } catch {
      setFormStatus('Erro ao conectar com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form
      action={handleSubmit}
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
          name="name"
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
          name="email"
          type="email"
          className="mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          required
        />
      </div>

      <div className="flex flex-col mb-4">
        <label
          htmlFor="phone"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          Seu Telefone
        </label>
        <input
          id="phone"
          name="phone"
          ref={phoneInputRef}
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
          name="message"
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
        <p
          className={`mt-4 ${formStatus.includes('sucesso') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}
        >
          {formStatus}
        </p>
      )}
    </Form>
  );
};

export default CustomForm;
