import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

export function ErrorFallback() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Oups ! Une erreur est survenue
        </h2>
        <p className="text-gray-600 mb-6">
          La page que vous recherchez n'existe pas ou n'est plus disponible.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center px-4 py-2 bg-[#2A5F8A] text-white rounded-lg hover:bg-[#4CAF50] transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}