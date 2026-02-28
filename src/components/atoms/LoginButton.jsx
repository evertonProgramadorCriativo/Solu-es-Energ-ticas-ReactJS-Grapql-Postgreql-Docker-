import React from 'react';
import { LogIn, LogOut } from 'lucide-react';

// LoginButton é um componente funcional que recebe duas props: isLoggedIn (um booleano que indica se o usuário está logado ou não) e onClick (uma função que é chamada quando o botão é clicado). O componente renderiza um botão estilizado com Tailwind CSS, que exibe um ícone e um texto diferente dependendo do estado de login do usuário. Se isLoggedIn for true, o botão mostrará um ícone de logout e o texto "Sair". Caso contrário, mostrará um ícone de login e o texto "Entrar". O botão também tem uma transição suave para a cor de fundo ao ser hoverado.
const LoginButton = ({ isLoggedIn, onClick }) => (
  <button
    onClick={onClick}
    aria-label={isLoggedIn ? 'Sair da conta' : 'Entrar na conta'}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors"
  >
    {isLoggedIn ? (
      <>
        <LogOut size={18} />
        <span>Sair</span>
      </>
    ) : (
      <>
        <LogIn size={18} />
        <span>Entrar</span>
      </>
    )}
  </button>
);

export default LoginButton;
