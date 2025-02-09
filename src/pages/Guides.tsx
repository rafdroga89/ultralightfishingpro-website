import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, ArrowRight } from 'lucide-react';

function Guides() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1621698892718-ca1a1a9cb6ab?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Guides Techniques
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Maîtrisez l'art de la pêche ultra-light avec nos guides détaillés
          </p>
        </div>
      </header>

      {/* Guides Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link 
            to="/guides/ajing"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//aji%20banniere.webp")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Guide de l'Ajing</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Découvrez cette technique japonaise ultra-légère qui révolutionne la pêche en Europe.
              </p>
              <div className="flex items-center text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                Lire le guide <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          <Link 
            to="/guides/lrf"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf%201.jpg")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Guide du LRF</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Maîtrisez l'art de la pêche ultra-légère en milieu rocheux avec le Light Rock Fishing.
              </p>
              <div className="flex items-center text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                Lire le guide <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>

          {/* Placeholder for future guides */}
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center">
            <p className="text-gray-500 text-center">Plus de guides à venir prochainement...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guides;