import React from 'react';
import SubmitButton from '../atoms/SubmitButton';
import ResetButton from '../atoms/ResetButton';

// BotoesCalculoEnergia é um componente funcional que renderiza os botões de ação para calcular a economia e resetar o formulário. Ele recebe várias props para controlar o estado dos botões, incluindo onCalcular (uma função para lidar com o clique no botão de calcular), onResetar (uma função para lidar com o clique no botão de resetar), calculando (um booleano que indica se o cálculo está em andamento), disabled (um booleano que indica se os botões devem estar desabilitados) e temResultados (um booleano que indica se há resultados para mostrar, controlando a exibição do botão de resetar). O componente utiliza os componentes SubmitButton e ResetButton para renderizar os botões estilizados, aplicando as condições apropriadas para habilitar ou desabilitar os botões com base no estado do formulário.
const BotoesCalculoEnergia = ({
    onCalcular,
    onResetar,
    calculando = false,
    disabled = false,
    temResultados = false,

}) => (
    <div className="flex flex-wrap gap-3">
        <SubmitButton
            onClick={onCalcular}
            disabled={disabled}
            loading={calculando}
        />
        {temResultados && (
            <ResetButton onClick={onResetar} />
        )}
    </div>
);

export default BotoesCalculoEnergia;