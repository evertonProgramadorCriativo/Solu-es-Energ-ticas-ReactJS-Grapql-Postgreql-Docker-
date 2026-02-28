import React from 'react';
// NumberInput é um componente funcional que representa um campo de entrada do tipo número, estilizado com Tailwind CSS. Ele recebe várias props para configurar seu comportamento e aparência, incluindo value (o valor atual do campo), onChange (uma função para lidar com mudanças no valor), onKeyPress (uma função para lidar com eventos de pressionamento de tecla), placeholder (um texto de dica exibido quando o campo está vazio), min (o valor mínimo permitido), disabled (um booleano que indica se o campo está desabilitado) e id (um identificador único para o campo). O componente renderiza um elemento <input> do tipo number, aplicando estilos para borda, preenchimento e transições, além de estilos específicos para quando o campo está desabilitado. O atributo aria-labelledby é usado para melhorar a acessibilidade, associando o campo a um rótulo que o descreve.
const NumberInput = ({
  value,
  onChange,
  onKeyPress,
  placeholder = '',
  min,
  disabled = false,
  id,
  'aria-labelledby': ariaLabelledby,
}) => (
  <input
    id={id}
    type="number"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    placeholder={placeholder}
    min={min}
    disabled={disabled}
    aria-labelledby={ariaLabelledby}
    className="w-full p-3 border-2 border-slate-200 rounded-lg
      focus:border-blue-500 focus:outline-none transition-colors
      disabled:opacity-50 disabled:cursor-not-allowed"
  />
);

export default NumberInput;

/*
 Atributos do Input
 -------------------------------------------------------
id={id}
Conceito: Identificador único do elemento no HTML

Exemplo: id="campo-idade"

Uso: Permite associar labels, acessibilidade e selecionar o elemento com JavaScript/CSS
 -------------------------------------------------------
type="number"
Conceito: Define o tipo de dado que o campo aceita

Exemplo: type="email", type="password", type="text"

Uso: Controla validação, formato de exibição e teclado (em dispositivos móveis)
 -------------------------------------------------------
value={value}
Conceito: Valor atual do campo (conteúdo preenchido)

Exemplo: value="João Silva"

Uso: Exibe o dado inserido pelo usuário ou valor padrão
 -------------------------------------------------------
onChange={onChange}
Conceito: Função executada quando o valor muda

Exemplo: onChange={(e) => setNome(e.target.value)}

Uso: Captura e processa alterações no campo

 -------------------------------------------------------

onKeyPress={onKeyPress}
Conceito: Função executada quando uma tecla é pressionada

Exemplo: onKeyPress={(e) => { if(e.key === 'Enter') enviarForm() }}


Uso: Detectar teclas específicas como Enter, Esc, etc.

 -------------------------------------------------------
placeholder={placeholder}
Conceito: Texto de dica exibido quando o campo está vazio

Exemplo: placeholder="Digite seu nome completo"

Uso: Orientar o usuário sobre o que preencher
 -------------------------------------------------------
min={min}
Conceito: Valor mínimo aceito (para campos numéricos)

Exemplo: min="18"

Uso: Limitar valores inferiores em inputs do tipo number, date, etc.

 -------------------------------------------------------

disabled={disabled}
Conceito: Desabilita o campo, impedindo interação

Exemplo: disabled={true} ou disabled={usuarioNaoAdmin}

Uso: Campos que não podem ser editados em determinadas condições
 -------------------------------------------------------

aria-labelledby={ariaLabelledby}
Conceito: Atributo de acessibilidade que referencia um label

Exemplo: aria-labelledby="titulo-descricao"

Uso: Melhorar acessibilidade para leitores de tela
 -------------------------------------------------------
className
Conceito: Classes CSS para estilização

Exemplo: className="campo-formulario input-grande"

Uso: Aplicar estilos visuais ao componente


 */
