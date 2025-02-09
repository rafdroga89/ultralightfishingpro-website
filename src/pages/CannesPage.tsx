import React from 'react';
import { Target, Fish, Scale } from 'lucide-react';

export default function CannesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[60vh] md:h-[80vh] lg:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images/cannes%20hero.jpg"
            alt="Cannes à pêche ultra-light"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              console.error('Erreur de chargement de l\'image:', e);
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Guide des Cannes Ultra-Light
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Découvrez notre sélection des meilleures cannes pour la pêche ultra-light et le rockfishing
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full">
                  <Scale className="w-8 h-8 text-[#2A5F8A]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] text-center">
                Légèreté Optimale
              </h3>
              <p className="text-gray-600 text-center">
                Sélection de cannes ultra-légères pour une sensibilité maximale
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full">
                  <Target className="w-8 h-8 text-[#2A5F8A]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] text-center">
                Action Précise
              </h3>
              <p className="text-gray-600 text-center">
                Des actions adaptées pour le rockfishing et l'ajing
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full">
                  <Fish className="w-8 h-8 text-[#2A5F8A]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] text-center">
                Polyvalence
              </h3>
              <p className="text-gray-600 text-center">
                Pour toutes les techniques de pêche aux leurres légers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-bold text-[#2A5F8A] mb-8">
            Comment Choisir sa Canne Ultra-Light ?
          </h2>
          <p className="text-gray-700">
            Le choix d'une canne ultra-light est crucial pour la pratique du rockfishing et de l'ajing. 
            Plusieurs critères sont à prendre en compte : la longueur, l'action, la puissance et le type 
            d'anneaux. Notre guide vous aide à faire le meilleur choix selon votre style de pêche.
          </p>
          {/* Ajoutez ici plus de contenu spécifique aux cannes */}
        </div>
      </section>
    </div>
  );
}
