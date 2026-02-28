import React from 'react';
import { MapPin } from 'lucide-react';
import SelectInput from '../atoms/SelectInput';

// SeletorEstado é um componente funcional que representa um campo de seleção para escolher um estado. Ele recebe quatro props: estados (um array de objetos que representam os estados disponíveis para seleção), estadoSelecionado (o valor do estado atualmente selecionado), setEstadoSelecionado (uma função para atualizar o estado selecionado) e loadingEstados (um booleano que indica se os estados estão sendo carregados, com um valor padrão de false). O componente renderiza um rótulo com um ícone de localização e um campo de seleção estilizado usando o componente SelectInput. O campo de seleção é desabilitado enquanto os estados estão sendo carregados, e exibe uma opção padrão indicando o status de carregamento ou solicitando ao usuário que selecione um estado. Quando os estados são carregados, o componente mapeia o array de estados para renderizar uma opção para cada estado disponível, mostrando o nome e a sigla do estado.
const SeletorEstado = ({
  estados = [],
  estadoSelecionado,
  setEstadoSelecionado,
  loadingEstados = false,
}) => (
  <div>
    <label className="block mb-2 font-semibold text-slate-700 text-sm">
      <MapPin size={16} className="inline mr-1" />
      Estado
    </label>
    {/*  Este trecho renderiza um campo de seleção de estados utilizando o componente SelectInput.
Ele recebe o valor atual através da variável estadoSelecionado (com fallback para string vazia)
e atualiza o estado ao selecionar uma nova opção por meio da função setEstadoSelecionado.
O campo permanece desabilitado enquanto loadingEstados for true, impedindo interação
durante o carregamento dos dados. A primeira <option> funciona como placeholder dinâmico,
exibindo “Carregando...” enquanto os estados são buscados ou “Selecione um estado”
quando o carregamento termina. Após isso, o array estados é percorrido com map()
para gerar dinamicamente uma <option> para cada estado disponível,
utilizando estado.uf como key e value, e exibindo o nome e a sigla do estado.
*/}
    <SelectInput
      value={estadoSelecionado ?? ''}
      onChange={(e) => setEstadoSelecionado(e.target.value)}
      disabled={loadingEstados}
    >
      <option value="">{loadingEstados ? 'Carregando...' : 'Selecione um estado'}</option>

      {estados.map((estado) => (
        <option key={estado.uf} value={estado.uf}>
          {estado.nome} ({estado.uf})
        </option>
      ))}
    </SelectInput>
  </div>
);

export default SeletorEstado;
