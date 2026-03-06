import React from 'react';

const FAQPage = () => {
  return (
    <div className="bg-slate-50 min-h-[100vh]">
      {/* ── Header ── */}
      <header className="bg-slate-800 min-h-[520px] text-white py-14 relative overflow-hidden">
        {/* ── Bola no Canto Superior ── */}
        <div className="absolute inset-0 min-h-52 opacity-10 ">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400 rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
      </header>
    </div>
  );
};

export default FAQPage;
