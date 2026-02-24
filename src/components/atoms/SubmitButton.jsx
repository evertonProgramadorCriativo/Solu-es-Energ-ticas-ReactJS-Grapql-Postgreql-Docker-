import React from 'react';

import { Calculator, Loader } from 'lucide-react';


const SubmitButton = ({ onClick, disabled = false, loading = false }) => (
    <button
        onClick={onClick}
        disabled={disabled || loading}
        aria-busy={loading}
        className="flex items-center gap-2 bg-green-600 text-white px-6 py-3
      rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50
      disabled:cursor-not-allowed transition-colors"
    >
        {loading ? (
            <>
                <Loader size={18} className="animate-spin" aria-hidden="true" />
                Calculando...
            </>
        ) : (
            <>
                <Calculator size={18} aria-hidden="true" />
                Calcular Economia
            </>
        )}
    </button>
);

export default SubmitButton;