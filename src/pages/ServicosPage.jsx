import React from 'react';
import BackButton from '../components/atoms/BackButton';
import { Zap } from 'lucide-react';
import { statServiceArray } from '../data/ServicosPageData';
const ServicosPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <BackButton />
      {/* Header */}
      <section className="text-center mb-14">
        <div className="flex justify-center mb-5">
          <div className="bg-amber-500 rounded-2xl p-4 shadow-lg shadow-amber-200">
            <Zap size={36} className="text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Nossos Serviços</h1>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          Soluções completas em energia solar para residências, comércios e indústrias. Do projeto à
          manutenção, cuidamos de tudo.
        </p>
      </section>
      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {statServiceArray.map(({ value, label }) => (
          <div
            key={label}
            className="bg-white rounded-2xl p-5 text-center shadow-sm border border-slate-100"
          >
            <div className="text-2xl font-extrabold text-amber-500 mb-1">{value}</div>
            <div className="text-xs text-slate-500 font-medium">{label}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServicosPage;
