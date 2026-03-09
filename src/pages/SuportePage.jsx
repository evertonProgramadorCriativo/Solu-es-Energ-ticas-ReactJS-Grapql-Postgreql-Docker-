import React from 'react';

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
      </header>
    </div>
  );
};

export default SuportePage;
