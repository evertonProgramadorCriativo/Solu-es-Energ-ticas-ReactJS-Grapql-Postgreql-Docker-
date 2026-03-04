import React from 'react';
import BackButton from '../components/atoms/BackButton';
import { Zap } from 'lucide-react';
const ServicosPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <BackButton />
      {/* Header */}
      <div className="text-center mb-14">
        <div className="flex justify-center mb-5">
          <div className="bg-amber-500 rounded-2xl p-4 shadow-lg shadow-amber-200">
            <Zap size={36} className="text-white" />
          </div>
          git commit -m "feat(services): creates services page with header section and back button"
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Nossos Serviços</h1>
        <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
          Soluções completas em energia solar para residências, comércios e indústrias. Do projeto à
          manutenção, cuidamos de tudo.
        </p>
      </div>
    </div>
  );
};

export default ServicosPage;
