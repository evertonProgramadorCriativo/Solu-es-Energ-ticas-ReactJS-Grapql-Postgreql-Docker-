import React from 'react';
import { Zap, ArrowRight, Target, Globe, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/atoms/BackButton';
import { valores, techStack } from '../data/SobrePageData';

const SobrePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-50">
      {/* Header  */}
      <header className="bg-slate-800 min-h-[400px] text-white relative overflow-hidden">
        {/* Bolas decorativas amarelas */}
        <div className="absolute inset-0 opacity-10">
          {/* Bola 1 - está à direita no topo do header */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2" />
          {/* Bola 2 - está à esquerda no fundo do header */}
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500 rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase tracking-widest">
              <Zap size={14} /> Sobre a Calarke Energia
            </div>
            {/* Título principal com destaque para "luz solar" em amarelo */}
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Transformando <span className="text-amber-400">luz solar</span> em liberdade
              energética
            </h1>
            {/* Parágrafo de descrição */}
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Há mais de 12 anos conectamos brasileiros à energia do futuro. Mais de 1.200 projetos
              instalados, 15 MW de capacidade e um compromisso inabalável com o planeta.
            </p>
            {/* Botão "Fale com a gente" */}
            <button
              onClick={() => navigate('/contato')}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Fale com a gente <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-10">
        <BackButton />

        {/*  Cards Informativos Sobre a Empresa  */}
        <section className="mb-16">
          {/* Coluna de Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Missão */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <Target size={28} className="text-amber-500 mb-4" />
              <h3 className="text-lg font-extrabold text-slate-800 mb-2">Missão</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Democratizar o acesso à energia solar limpa e acessível para residências, comércios
                e indústrias em todo o Brasil.
              </p>
            </div>
            {/* Card 2: Visão */}
            <div className="bg-amber-500 rounded-3xl p-8 shadow-xl shadow-amber-200 text-white">
              <Globe size={28} className="text-white mb-4" />
              <h3 className="text-lg font-extrabold mb-2">Visão</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Ser a maior e mais confiável empresa de energia solar do Brasil até 2030, liderando
                a transição para uma economia de carbono zero.
              </p>
            </div>
            {/* Card 3: Propósito */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <Award size={28} className="text-amber-500 mb-4" />
              <h3 className="text-lg font-extrabold text-slate-800 mb-2">Propósito</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Cada painel instalado é um voto pelo futuro. Acreditamos que energia limpa não é
                luxo — é direito de todos.
              </p>
            </div>
          </div>
        </section>
        {/*  section nossos valores */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-8 text-center">
            Nossos Valores
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {valores.map(({ icon: Icon, titulo, desc }) => (
              //icon : Icon é uma destruturação que renomeia a propriedade "icon" para "Icon" para ser usada como um componente React. Assim, podemos renderizar o ícone dinamicamente usando <Icon /> no JSX.
              //icon:Icon é igual const Icon = icon.item para ser usado em componentes React. Assim, podemos renderizar o ícone dinamicamente usando <Icon /> no JSX.
              <div
                key={titulo}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:-translate-y-1 transition-all text-center"
              >
                <div className="bg-amber-50 rounded-xl p-3 inline-flex mb-4">
                  <Icon size={22} className="text-amber-500" />
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-2">{titulo}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Banner Produtos e Serviços da empresa */}
        <section className="mb-16 min-h-[400px] bg-slate-800 p-10 text-white relative overflow-hidden">
          {/* Bolas decorativas amarelas no banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          {/* Coluna divisão em 2 partes */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Tecnologia que a Empresa Oferece */}
            <div className="flex flex-col h-full">
              <h2 className="text-2xl font-extrabold mb-3">Tecnologia que usamos</h2>
              <p className="text-slate-400 text-sm mb-6 max-w-lg">
                Trabalhamos apenas com equipamentos certificados e fabricantes de classe mundial.
              </p>

              <div className="grid grid-cols-2 gap-4 flex-1">
                {/*Desestruturação const icon = Icon para Componente <Icon> */}
                {techStack.map(({ icon: Icon, label, desc, img }) => (
                  <div
                    key={label}
                    className="relative bg-slate-700 rounded-2xl overflow-hidden flex flex-col min-h-40 group"
                  >
                    {/* Imagem de fundo */}
                    {img && (
                      <>
                        <img
                          src={img}
                          alt={label}
                          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-45 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/40 to-transparent" />
                      </>
                    )}

                    {/* Conteúdo do card Dinâmico */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-5 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-auto">
                        <Icon size={22} className="text-amber-400" />
                      </div>
                      <div className="mt-8">
                        <span className="text-sm font-extrabold text-white block leading-tight">
                          {label}
                        </span>
                        {/* Se tive Desconto */}
                        {desc && (
                          <p className="text-slate-400 text-[11px] mt-1 leading-snug">{desc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SobrePage;
