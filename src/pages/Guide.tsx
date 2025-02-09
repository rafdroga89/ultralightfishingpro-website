import React from 'react';
import { Construction } from 'lucide-react';

function Guide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide de Pêche Ultra Light
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez toutes les techniques et astuces pour la pêche ultra light
          </p>
        </div>
      </header>

      {/* Under Construction Message */}
      <div className="max-w-4xl mx-auto py-32 px-4 text-center">
        <Construction className="w-16 h-16 text-[#2A5F8A] mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page en Construction</h2>
        <p className="text-xl text-gray-600">
          Notre guide complet est en cours de rédaction. Revenez bientôt pour découvrir toutes nos astuces et techniques pour la pêche ultra-light.
        </p>
      </div>
    </div>
  );
}

export default Guide;