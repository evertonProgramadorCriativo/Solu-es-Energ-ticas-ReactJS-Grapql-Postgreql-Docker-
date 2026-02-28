import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import LoginButton from '../atoms/LoginButton';
import NavLink from '../atoms/NavLink';
import { navItems, dropdownItems } from '../../data/navData';

// MobileMenu é um componente funcional que representa o menu de navegação para dispositivos móveis. Ele recebe três props: isLoggedIn (um booleano que indica se o usuário está logado ou não), onToggleLogin (uma função para alternar o estado de login) e onClose (uma função para fechar o menu móvel). O componente renderiza uma lista de links de navegação, incluindo um botão de login/logout e um submenu "Mais" que exibe opções adicionais. O submenu "Mais" tem sua própria lógica de abertura e fechamento, utilizando useState para controlar seu estado e useRef para detectar cliques fora do submenu, garantindo uma experiência de usuário intuitiva em dispositivos móveis.

const MobileMenu = ({ isLoggedIn, onToggleLogin, onClose }) => {
  const [isMaisOpen, setIsMaisOpen] = useState(false);

  // useRef para o bloco "Mais" para detectar cliques fora dele e fechar o submenu quando necessário
  const maisRef = useRef(null);

  // useEffect para adicionar um event listener que fecha o submenu "Mais" quando o usuário clica fora dele. A função handleClickOutside verifica se o clique ocorreu fora do elemento referenciado por maisRef e, se sim, define isMaisOpen como false, fechando o submenu. O event listener é limpo quando o componente é desmontado para evitar vazamentos de memória.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // event.target - o elemento que o usuário clicou
      // maisRef.current.contains(event.target) - verifica se o elemento clicado está dentro do bloco "Mais"
      if (maisRef.current && !maisRef.current.contains(event.target)) {
        // Fecha o submenu "Mais" se clicar fora dele
        setIsMaisOpen(false);
      }
    };
    // Toda vez que o usuário clicar em qualquer lugar da página, a função handleClickOutside é chamada para verificar se o clique ocorreu fora do bloco "Mais". Se sim, o estado isMaisOpen é definido como false, fechando o submenu "Mais".
    document.addEventListener('mousedown', handleClickOutside);
    // Limpa o event listener quando o componente é desmontado para evitar vazamentos de memória
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="md:hidden mt-4 border-t border-slate-600 pt-4">
      <ul className="flex flex-col gap-2">
        {/* Login  */}
        <li>
          <LoginButton isLoggedIn={isLoggedIn} onClick={onToggleLogin} />
        </li>

        {/* Contato e Serviços via map */}
        {/* O método map é usado para iterar sobre o array navItems e renderizar um link de navegação para cada item. Cada link é estilizado com Tailwind CSS e tem um evento onClick que chama a função onClose para fechar o menu móvel quando um link é clicado. O atributo aria-label é usado para melhorar a acessibilidade, fornecendo uma descrição do link para leitores de tela.*/}
        {navItems.map((item) => (
          <li key={item.nome}>
            <a
              href={item.href}
              aria-label={item.alt}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
              onClick={onClose}
            >
              {item.nome}
            </a>
          </li>
        ))}

        {/* Mais DropDwan — ref aponta só para este bloco */}
        {/* O bloco "Mais" é um item de lista que contém um botão para abrir o submenu e uma lista de links adicionais. O estado isMaisOpen controla a visibilidade do submenu, e a referência maisRef é usada para detectar cliques fora do bloco "Mais" para fechar o submenu quando necessário. O submenu é renderizado condicionalmente com base no estado isMaisOpen, e cada link dentro do submenu também chama a função onClose ao ser clicado para garantir que o menu móvel seja fechado. */}
        <li ref={maisRef}>
          <button
            onClick={() => setIsMaisOpen((prev) => !prev)}
            aria-label="Abrir mais opções"
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <span>Mais</span>
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${isMaisOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {/* O submenu "Mais" é renderizado condicionalmente com base no estado isMaisOpen. Se isMaisOpen for true, a lista de links adicionais será exibida. Cada link dentro do submenu é renderizado usando o componente NavLink, e ao clicar em qualquer link, a função onClose é chamada para fechar o menu móvel. A estrutura do submenu é uma lista flexível que se adapta ao conteúdo, garantindo uma experiência de usuário fluida em dispositivos móveis. */}
          {isMaisOpen && (
            <ul className="mt-1 ml-4 flex flex-col gap-1">
              {/* O método map é usado para iterar sobre o array dropdownItems e renderizar um link de navegação para cada item dentro do submenu "Mais". Cada link é estilizado com Tailwind CSS e tem um evento onClick que chama a função onClose para fechar o menu móvel quando um link é clicado. O atributo aria-label é usado para melhorar a acessibilidade, fornecendo uma descrição do link para leitores de tela. */}
              {dropdownItems.map((item) => (
                <li key={item.nome}>
                  <NavLink
                    href={item.href}
                    alt={item.alt}
                    nome={item.nome}
                    onClick={() => {
                      setIsMaisOpen(false);
                      onClose();
                    }}
                  />
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MobileMenu;
