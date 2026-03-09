import { Briefcase, MapPin, Users, Star } from 'lucide-react';

const CarreiraPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <header className="bg-slate-800 text-white py-16 relative overflow-hidden">
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
    </div>
  );
};

export default CarreiraPage;
