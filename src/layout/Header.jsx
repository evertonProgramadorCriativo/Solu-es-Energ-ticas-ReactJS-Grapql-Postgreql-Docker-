import React, { useState } from 'react';
import { Zap, ChevronDown, LogIn, LogOut, Mail, Briefcase } from 'lucide-react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setIsDropdownOpen(false);
  };
  return (
    <header className="bg-slate-800 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Zap size={32} className="text-amber-400" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Calarke Energia</h1>
              <p className="text-slate-300 text-sm hidden md:block">
                Calcule sua economia com energia sustentável
              </p>
            </div>
          </div>
          {/* Navigation List with Flexbox */}
          <nav>
            <ul className="flex items-center gap-4">
              {/* Login/Logout Button */}
              <li>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 transition-colors"
                >
                  <LogIn size={18} />
                  <span>Entrar</span>
                </button>
              </li>

              {/* Contact Button */}
              <li>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                  <Mail size={18} />
                  <span>Contato</span>
                </button>
              </li>

              {/* Services Button */}
              <li>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                  <Briefcase size={18} />
                  <span>Serviços</span>
                </button>
              </li>

              {/* Dropdown Menu */}
              <li className="relative">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <span>Mais</span>
                  <ChevronDown
                    size={18}

                  />
                </button>

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;