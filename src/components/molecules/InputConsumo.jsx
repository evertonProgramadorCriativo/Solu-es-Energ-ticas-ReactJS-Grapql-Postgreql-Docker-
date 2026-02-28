import React from 'react';
import { Zap } from 'lucide-react';
import NumberInput from '../atoms/NumberInput';

// InputConsumo é um componente funcional que representa um campo de entrada para o consumo mensal em kWh. Ele recebe três props: value (o valor atual do campo de entrada), onChange (uma função para atualizar o valor do campo de entrada) e onKeyPress (uma função para lidar com eventos de pressionamento de tecla). O componente renderiza um rótulo com um ícone de raio e um campo de entrada estilizado usando o componente NumberInput. O campo de entrada é configurado para aceitar apenas números, com um placeholder que sugere um exemplo de consumo mensal. O componente é projetado para ser reutilizável e pode ser facilmente integrado a outros componentes ou páginas da aplicação.
const InputConsumo = ({ value, onChange, onKeyPress }) => (
  <div>
    <label id="label-consumo" className="block mb-2 font-semibold text-slate-700 text-sm">
      <Zap size={16} className="inline mr-1" />
      Consumo Mensal (kWh)
    </label>
    <NumberInput
      id="input-consumo"
      aria-labelledby="label-consumo"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="Ex: 500"
      min="1"
    />
  </div>
);

export default InputConsumo;

/**
 * Atributos do Componente Customizado NumberInput
id="input-consumo"
Conceito: Identificador único do campo de consumo

Exemplo: id="input-consumo"

Uso: Permite associar labels e selecionar este campo específico para consumo de energia/água/gás

aria-labelledby="label-consumo"
Conceito: Atributo de acessibilidade que referencia o ID do label que descreve este campo

Exemplo: aria-labelledby="label-consumo"

Uso: Quando o leitor de tela focar neste input, ele lerá o texto do elemento com id="label-consumo" (ex: "Consumo mensal em kWh")

value={value}
Conceito: Valor atual do campo de consumo

Exemplo: Se value for 500, o campo mostrará "500"

Uso: Armazena o número digitado pelo usuário (ex: consumo de 500 kWh)

onChange={onChange}
Conceito: Função chamada quando o valor do consumo é alterado

Exemplo: onChange={(e) => setConsumo(e.target.value)}

Uso: Atualiza o estado do componente com o novo valor de consumo digitado

onKeyPress={onKeyPress}
Conceito: Função executada quando uma tecla é pressionada no campo

Exemplo: onKeyPress={(e) => { if(e.key === 'Enter') calcularConsumo() }}

Uso: Permite ações como pressionar Enter para calcular o consumo ou validar enquanto digita

placeholder="Ex: 500"
Conceito: Texto de exemplo exibido quando o campo está vazio

Exemplo: placeholder="Ex: 500"

Uso: Sugere ao usuário um valor típico de consumo (500 kWh/mês, 500L, etc.)

min="1"
Conceito: Valor mínimo aceito para o consumo

Exemplo: min="1"

Uso: Impede que o usuário digite valores menores que 1 (consumo zero ou negativo não faz sentido)
 */
