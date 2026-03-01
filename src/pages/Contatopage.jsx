import React from 'react';
import BackButton from '../components/atoms/BackButton';
import { Send } from 'lucide-react';
import { sidebarInfoContato } from '../data/sidebarInfoContato';
const ContatoPage = () => {
  return (
    <div className="bg-white min-h-[500px]">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <BackButton />
        {/* Header Contato Solicitar Proposta */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-amber-500 rounded-xl p-2.5">
              <Send size={22} className="text-white" />
            </div>
            <h1 className="text-3xl font-extrabold text-slate-800">Solicitar Proposta</h1>
          </div>
          <p className="text-slate-500 text-sm max-w-xl leading-relaxed">
            Preencha o formulário abaixo e nossa equipe especializada elaborará uma proposta
            personalizada para sua necessidade energética.
          </p>
        </div>
        {/* Sidebar Info */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col gap-4">
            {sidebarInfoContato.map(({ icon, title, desc }) => {
              const Icon = icon;
              return (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex gap-4 items-start"
                >
                  <div className="bg-amber-50 rounded-xl p-2.5 shrink-0">
                    <Icon size={20} className="text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm">{title}</h3>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
