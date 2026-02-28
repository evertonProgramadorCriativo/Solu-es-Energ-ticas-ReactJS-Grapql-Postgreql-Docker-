import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { estadosData } from '../../data/estadosData';
import SeletorEstado from '../molecules/SeletorEstado';
import InputConsumo from '../molecules/InputConsumo';
import BotoesCalculoEnergia from '../molecules/BotoesCalculoEnergia';

const FormularioCalculo = () => {
  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  const [consumoMensal, setConsumoMensal] = useState('');
  const [resultado, setResultado] = useState(null);
  const [calculando, setCalculando] = useState(false);

  const estadoData = estadosData.find((e) => e.uf === estadoSelecionado);
  const podeCadcular =
    estadoSelecionado !== '' && consumoMensal !== '' && Number(consumoMensal) > 0;

  const handleCalcular = () => {
    if (!podeCadcular) return;

    setCalculando(true);
    /**
         *export const estadosData = [
           { uf: 'SP', nome: 'São Paulo', tarifaBaseKwh: 0.656 },
           { uf: 'RJ', nome: 'Rio de Janeiro', tarifaBaseKwh: 0.789 },
           { uf: 'MG', nome: 'Minas Gerais', tarifaBaseKwh: 0.612 },
           { uf: 'ES', nome: 'Espírito Santo', tarifaBaseKwh: 0.701 },
           { uf: 'PR', nome: 'Paraná', tarifaBaseKwh: 0.598 },
       ];
         
         */
    // Simula um pequeno delay para demonstrar o estado de loading
    setTimeout(() => {
      const tarifa = estadoData.tarifaBaseKwh; //RJ = 0.789
      const consumo = Number(consumoMensal); // Ex: 500 kWh
      const custoAtual = consumo * tarifa;
      // Ex: 500 kWh * R$ 0.789/kWh = R$ 394.50
      const desconto = 0.15; // 15% de economia estimada
      const economia = custoAtual * desconto;
      // Ex: R$ 394.50 * 15% = R$ 59.18
      const custoComEnergiaSolar = custoAtual - economia;
      // Ex: R$ 394.50 - R$ 59.18 = R$ 335.32

      setResultado({
        estado: estadoData.nome,
        consumo,
        tarifa,
        custoAtual: custoAtual.toFixed(2),
        economia: economia.toFixed(2),
        custoComEnergiaSolar: custoComEnergiaSolar.toFixed(2),
      });
      /* { estado: "Rio de Janeiro",
                consumo: 500,
                tarifa: 0.789,
                custoAtual: 394.50,
                economia: 59.18,
                custoComEnergiaSolar: 335.32 }*/

      //setCalculando(false) é chamado após a simulação para indicar que o processo de cálculo foi concluído, permitindo que o usuário veja os resultados e interaja com o formulário novamente.
      setCalculando(false);
    }, 800);
  };
  // handleResetar é uma função que limpa os campos do formulário e reseta o resultado, permitindo que o usuário faça uma nova simulação do zero.
  const handleResetar = () => {
    setEstadoSelecionado('');
    setConsumoMensal('');
    setResultado(null);
  };
  // handleKeyPress é uma função que permite ao usuário acionar o cálculo da economia pressionando a tecla "Enter" enquanto estiver focado no campo de entrada do consumo mensal, desde que os campos necessários estejam preenchidos corretamente.
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && podeCadcular) {
      handleCalcular();
    }
  };

  return (
    <div className="bg-white  h-auto  pt-6 px-6 pb-20 shadow-md">
      {/* FormularioCalculo é um componente funcional que representa um formulário para simulação de economia de energia. */}
      <div className="flex items-center gap-2 py-4 mb-6">
        <Calculator size={24} className="text-slate-700" />
        <h2 className="text-xl font-semibold text-slate-800">Simulação de Economia</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 py-3 mb-6">
        {/**
         * @component SeletorEstado
         * @description Componente controlado para seleção de UF
         * @param {Array} estados - Lista de estados disponíveis
         * @param {string} estadoSelecionado - UF atualmente selecionada
         * @param {function} setEstadoSelecionado - Setter do estado no componente pai
         */}
        <SeletorEstado
          estados={estadosData}
          estadoSelecionado={estadoSelecionado}
          setEstadoSelecionado={setEstadoSelecionado}
        />
        {/**
         * @component InputConsumo
         * @description Campo numérico para entrada do consumo mensal
         * @param {number|string} value - Valor atual do consumo
         * @param {function} onChange - Handler para atualização do valor
         */}
        <InputConsumo
          value={consumoMensal}
          onChange={(e) => setConsumoMensal(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      {/**
       * @component BotoesCalculoEnergia
       * @description Componente de ações do formulário com botões de calcular e resetar
       *
       * @param {function} onCalcular - Callback acionado ao clicar no botão Calcular
       * @param {function} onResetar - Callback acionado ao clicar no botão Resetar
       * @param {boolean} calculando - Estado de loading que desabilita os botões durante o cálculo
       * @param {boolean} disabled - Indica se o botão Calcular está desabilitado (validação do formulário)
       * @param {boolean} temResultados - Controla a visibilidade do botão Resetar quando há resultados
       *
       **/}
      <BotoesCalculoEnergia
        onCalcular={handleCalcular}
        onResetar={handleResetar}
        calculando={calculando}
        disabled={!podeCadcular}
        temResultados={resultado !== null}
      />
      {/* Painel de Resultado */}
      {resultado && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 mb-3">Resultado da Simulação</h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
            <div>
              <span className="text-3xl">Estado:</span>{' '}
              <span className="text-4xl font-bold">{resultado.estado}</span>
            </div>
            <div>
              <span className="text-3xl">Consumo:</span>{' '}
              <span className="text-4xl font-bold">{resultado.consumo} kWh</span>
            </div>
            <div>
              <span className="text-3xl">Tarifa:</span>
              <span className="text-4xl font-bold"> R$ {resultado.tarifa.toFixed(3)}/kWh</span>
            </div>
            <div>
              <span className="text-3xl">Custo Atual:</span>{' '}
              <span className="text-4xl font-bold"> R$ {resultado.custoAtual}</span>
            </div>
            <div className="text-green-700">
              <span className="text-3xl">Economia Estimada (15%):</span>{' '}
              <span className="text-4xl font-bold"> R$ {resultado.economia}</span>
            </div>
            <div className="text-green-700">
              <span className="text-3xl">Custo com Energia Solar:</span>{' '}
              <span className="text-4xl font-bold"> R$ {resultado.custoComEnergiaSolar}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioCalculo;
