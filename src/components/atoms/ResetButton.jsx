import React from 'react';

import { RotateCcw } from 'lucide-react';


const ResetButton = ({ onClick, disabled = false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="flex items-center gap-2 bg-slate-200 text-slate-700 px-6 py-3
      rounded-lg font-semibold hover:bg-slate-300 disabled:opacity-50
      disabled:cursor-not-allowed transition-colors"
    >
        <RotateCcw size={18} aria-hidden="true" />
        Limpar
    </button>
);

export default ResetButton;