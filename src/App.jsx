import React, { useState } from 'react';
import Header from './components/organisms/Header';
import FormularioCalculo from './components/organisms/FormularioCalculo';


function App() {

  const [estadoSelecionado, setEstadoSelecionado] = useState('');
  return (
    <div className="min-h-screen bg-cyan-400 flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-8">
        <FormularioCalculo
          estadoSelecionado={estadoSelecionado}
          setEstadoSelecionado={setEstadoSelecionado} />

      </main>
    </div>
  );
}

export default App;