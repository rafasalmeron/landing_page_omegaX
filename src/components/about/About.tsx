'use client';

import { motion } from 'framer-motion';

const About = () => {
  const cards = [
    {
      title: 'Controle Total',
      description: 'Gerencie seu estoque em tempo real com facilidade.',
      extra: [
        'Alertas automáticos de estoque baixo.',
        'Registro de movimentações de produtos.',
        'Histórico detalhado de vendas e compras.',
      ],
    },
    {
      title: 'Integração',
      description: 'Conecte-se a plataformas como iFood e sistemas de PDV.',
      extra: [
        'Sincronização em tempo real com PDV.',
        'API aberta para integrações personalizadas.',
        'Automação de pedidos e entregas.',
      ],
    },
    {
      title: 'Relatórios Inteligentes',
      description: 'Tenha insights sobre suas vendas e estoque.',
      extra: [
        'Dashboards personalizados.',
        'Relatórios exportáveis em PDF e Excel.',
        'Análises preditivas para otimizar compras.',
      ],
    },
    {
      title: 'Segurança Avançada',
      description: 'Proteja seus dados com criptografia e backups.',
      extra: [
        'Autenticação em dois fatores.',
        'Backups automáticos e seguros.',
        'Controle de acesso granular.',
      ],
    },
    {
      title: 'Suporte Especializado',
      description: 'Conte com suporte técnico sempre que precisar.',
      extra: [
        'Atendimento via chat e email.',
        'Central de ajuda com tutoriais.',
        'Consultoria para melhores práticas.',
      ],
    },
    {
      title: 'Automação Inteligente',
      description: 'Reduza tarefas manuais com processos automatizados.',
      extra: [
        'Reabastecimento automático.',
        'Geração de relatórios periódicos.',
        'Alertas inteligentes de anomalias.',
      ],
    },
  ];

  return (
    <motion.section
      id="sobre"
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
        <span className="text-blue-500">Simplifique </span>
        sua gestão de estoque
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        Nosso sistema ajuda pequenos negócios a controlar estoque, pedidos e
        vendas de maneira eficiente e integrada, reduzindo desperdícios e
        otimizando tempo.
      </motion.p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cards.map((item, index) => (
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
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
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

export default About;
