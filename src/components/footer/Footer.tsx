const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl font-orbitron">EmpresaX</h2>
          <p className="mt-4 text-gray-400">
            Solução completa para gerenciamento de estoque, pedidos e vendas.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Links Úteis</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Recursos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Planos
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Contato</h3>
          <p className="mt-4 text-gray-400">Email: rafasalmeronjr@gmail.com</p>
          <p className="text-gray-400">Telefone: (21) 98067-9231</p>
          <p className="text-gray-400">Endereço: Petrópolis </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Nos Acompanhe</h3>
          <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/rafasalmeron/"
              className="text-gray-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()}{' '}
          <span className="font-orbitron">EmpresaX</span> Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
