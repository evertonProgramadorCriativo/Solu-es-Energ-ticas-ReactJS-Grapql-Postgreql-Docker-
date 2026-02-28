import React from 'react';
// SelectInput é um componente funcional que representa um campo de seleção (dropdown) estilizado com Tailwind CSS. Ele recebe quatro props: value (o valor selecionado), onChange (uma função que é chamada quando o valor selecionado muda), disabled (um booleano que indica se o campo de seleção está desabilitado ou não, com um valor padrão de false) e children (os elementos filhos que representam as opções do dropdown). O componente renderiza um elemento <select> com estilos para borda, preenchimento e transições, além de aplicar estilos específicos quando o campo está desabilitado para indicar visualmente que não pode ser interagido. O atributo aria-label é usado para melhorar a acessibilidade, fornecendo uma descrição do campo de seleção para leitores de tela.
const SelectInput = ({ value, onChange, disabled = false, children }) => (
  <select
    value={value}
    onChange={onChange}
    disabled={disabled}
    className="w-full p-3 border-2 border-slate-200 rounded-lg focus:border-blue-500
      focus:outline-none transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </select>
);

export default SelectInput;
