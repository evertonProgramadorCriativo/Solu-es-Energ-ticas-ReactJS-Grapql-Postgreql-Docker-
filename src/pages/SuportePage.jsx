import React from 'react';
import { Headphones, Clock } from 'lucide-react';
import { slas, canais } from '../data/SuportePageData';
import BackButton from '../components/atoms/BackButton';
const SuportePage = () => {
  return (
    <div className="bg-slate-50 min-h-screen relative">
      {/*  Header */}
      <header className="bg-slate-800 text-white py-14 relative overflow-hidden min-h-[400px]">
        {/*  Bolas no Header */}
        <div className="absolute inset-0 opacity-10 ">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-20 w-48 h-48 bg-amber-600 rounded-full translate-y-1/2" />
        </div>
        {/* Header Conteudo */}
        <div className="relative max-w-6xl mx-auto px-4">
          {/* Header Conteudo Informativo */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase tracking-widest">
                <Headphones size={14} /> Central de Suporte
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                Estamos aqui para <span className="text-amber-400">resolver</span>
              </h1>
              <p className="text-slate-300 leading-relaxed mb-6 max-w-lg">
                Problemas acontecem — nossa equipe técnica está pronta para agir rápido e garantir
                que seu sistema volte a operar com máxima eficiência.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <Clock size={16} className="text-amber-400" />
                <span className="text-slate-300">Atendimento 24/7 para emergências</span>
              </div>
            </div>
            {/* cards em grid 2x2 no banner da página de suporte para apresentar informações relevantes sobre a empresa */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              {slas.map(({ tipo, prazo, cor, bg }) => (
                <div key={tipo} className={`${bg} rounded-2xl p-6 text-center`}>
                  <div className={`text-2xl font-extrabold ${cor}`}>{prazo}</div>
                  <div className="text-slate-600 text-2xl font-bold mt-1">{tipo}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <BackButton />

        {/*  CANAIS DE ATENDIMENTO */}
        <section className="mb-14">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2 text-center">Fale Conosco</h2>
          <p className="text-slate-500 text-sm text-center mb-8">
            Escolha o canal mais conveniente para você
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {canais.map(({ icon: Icon, titulo, desc, info, badge, cor, destaque }) => (
              //icon : Icon é uma destruturação que renomeia a propriedade "icon" para "Icon" para ser usada como um componente React. Assim, podemos renderizar o ícone dinamicamente usando <Icon /> no JSX.
              //icon:Icon é igual const Icon = icon.item para ser usado em componentes React. Assim, podemos renderizar o ícone dinamicamente usando <Icon /> no JSX.
              <div
                key={titulo}
                className={`rounded-3xl p-7 border-2 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  destaque
                    ? 'bg-amber-500 border-amber-400 text-white shadow-xl shadow-amber-200'
                    : 'bg-white border-slate-100 shadow-sm'
                }`}
              >
                <div
                  className={`rounded-xl p-3 inline-flex mb-4 ${destaque ? 'bg-white/20' : cor}`}
                >
                  <Icon size={22} className={destaque ? 'text-white' : ''} />
                </div>
                <h3
                  className={`text-lg font-extrabold mb-1 ${destaque ? 'text-white' : 'text-slate-800'}`}
                >
                  {titulo}
                </h3>
                <p className={`text-sm mb-3 ${destaque ? 'text-white/70' : 'text-slate-500'}`}>
                  {desc}
                </p>
                <p
                  className={`font-bold text-sm mb-4 ${destaque ? 'text-white' : 'text-slate-800'}`}
                >
                  {info}
                </p>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full ${destaque ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'}`}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SuportePage;
