import React from 'react';
import { ChevronDown } from 'lucide-react';
import NavLink from '../atoms/NavLink';
import { dropdownItems } from '../../data/navData';

// DropdownMenu é um componente funcional que representa o menu dropdown no cabeçalho. Ele recebe quatro props: isOpen (um booleano que indica se o dropdown está aberto ou fechado), onToggle (uma função para alternar o estado do dropdown), onClose (uma função para fechar o dropdown) e dropdownRef (uma referência ao elemento do dropdown para detectar cliques fora dele). O componente renderiza um botão que, quando clicado, alterna a visibilidade do menu dropdown. O menu é posicionado de forma absoluta e contém uma lista de links gerados a partir do array dropdownItems. Cada link é renderizado usando o componente NavLink, e ao clicar em qualquer link, a função onClose é chamada para fechar o dropdown.
const DropdownMenu = ({ isOpen, onToggle, onClose, dropdownRef }) => (
    <li className="relative" ref={dropdownRef}>
        <button
            onClick={onToggle}
            aria-label="Abrir mais opções"
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
            <span>Mais</span>
            <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
        </button>

        {isOpen && (
            <div className="absolute right-0 mt-6 w-screen max-w-xs lg:max-w-sm bg-slate-700 rounded-b-lg shadow-xl py-2 z-50">
                {/* O método map é usado para iterar sobre o array dropdownItems e renderizar um link de navegação para cada item dentro do menu dropdown. Cada link é estilizado com Tailwind CSS e tem um evento onClick que chama a função onClose para fechar o dropdown quando um link é clicado. O atributo aria-label é usado para melhorar a acessibilidade, fornecendo uma descrição do link para leitores de tela.*/}
                {dropdownItems.map((item) => (
                    <NavLink
                        key={item.nome}
                        href={item.href}
                        alt={item.alt}
                        nome={item.nome}
                        onClick={onClose}
                    />
                ))}
            </div>
        )}
    </li>
);

export default DropdownMenu;