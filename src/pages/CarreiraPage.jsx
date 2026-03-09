import React, { useState } from 'react';

import { Briefcase, MapPin, Users, Star, Clock, ArrowRight } from 'lucide-react';
import { vagas } from '../data/CarreiraData';

const CarreiraPage = () => {
  const [vagaAberta, setVagaAberta] = useState(null);
  const [filtroArea, setFiltroArea] = useState('Todas');
  const [candidatando, setCandidatando] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const areas = ['Todas', ...new Set(vagas.map((v) => v.area))];

  const vagasFiltradas = vagas.filter((v) => filtroArea === 'Todas' || v.area === filtroArea);
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white py-16 relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-600 rounded-full translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 text-sm font-bold mb-4 uppercase tracking-widest">
              <Briefcase size={14} /> Carreira
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Construa o futuro da <span className="text-amber-400">energia limpa</span> com a gente
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Somos um time apaixonado por sustentabilidade, tecnologia e impacto real. Se você quer
              fazer parte da transformação energética do Brasil, este é o seu lugar.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Users size={16} /> 85 colaboradores
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <MapPin size={16} /> 4 estados
              </div>
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Star size={16} /> 4.8/5 no Glassdoor
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* SEÇÃO VAGAS  */}
      <section className="mb-24">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-2">Vagas Abertas</h2>
          <p className="text-slate-500 text-sm mb-6">{vagas.length} oportunidades disponíveis</p>

          {/* Filtro de área */}
          <div className="flex flex-wrap gap-2 justify-center">
            {areas.map((area) => (
              <button
                key={area}
                onClick={() => setFiltroArea(area)}
                className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                  filtroArea === area
                    ? 'bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-amber-300'
                }`}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {vagasFiltradas.map((vaga) => {
            const Icon = vaga.icon;
            const isOpen = vagaAberta === vaga.titulo;
            return (
              <div
                key={vaga.titulo}
                className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm transition-all ${isOpen ? 'border-amber-400' : 'border-slate-100'}`}
              >
                <button
                  onClick={() => setVagaAberta(isOpen ? null : vaga.titulo)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-amber-50 rounded-xl p-3 shrink-0">
                      <Icon size={20} className="text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-slate-800">{vaga.titulo}</h3>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin size={11} />
                          {vaga.local}
                        </span>
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <Clock size={11} />
                          {vaga.tipo}
                        </span>
                        <span className="text-xs bg-amber-50 text-amber-700 font-bold px-2 py-0.5 rounded-full">
                          {vaga.nivel}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 border-t border-slate-100 pt-5">
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{vaga.desc}</p>
                    <div className="mb-5">
                      <h5 className="text-xs font-extrabold text-slate-700 uppercase tracking-wide mb-2">
                        Requisitos
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {vaga.requisitos.map((r) => (
                          <span
                            key={r}
                            className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {r}
                          </span>
                        ))}
                      </div>
                    </div>
                    {enviado && candidatando === vaga.titulo ? (
                      <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                        <CheckCircle2 size={18} /> Candidatura enviada com sucesso!
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setCandidatando(vaga.titulo);
                          setEnviado(true);
                        }}
                        className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all inline-flex items-center gap-2 shadow-sm"
                      >
                        <Send size={14} /> Candidatar-se
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CarreiraPage;
