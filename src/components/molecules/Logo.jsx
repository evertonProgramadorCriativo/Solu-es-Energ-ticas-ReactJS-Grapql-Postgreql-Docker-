import React from 'react';
import { Zap } from 'lucide-react';

// Logo é um componente funcional que representa a seção de logo do cabeçalho. Ele renderiza um ícone de raio usando o componente Zap da biblioteca lucide-react, seguido pelo nome da empresa "Calarke Energia" e um slogan. O layout é estilizado usando Tailwind CSS para criar uma aparência moderna e responsiva, com o slogan oculto em telas menores para otimizar o espaço.
const Logo = () => (
  <div className="flex items-center gap-3">
    <Zap size={32} className="text-amber-400" />
    <div>
      <h1 className="text-xl md:text-3xl font-bold">Calarke Energia</h1>
      <p className="text-slate-300 text-sm hidden md:block">
        Calcule sua economia com energia sustentável
      </p>
    </div>
  </div>
);

export default Logo;
