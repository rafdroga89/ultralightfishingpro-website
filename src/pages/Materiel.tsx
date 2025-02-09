import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Fish, Anchor, Scissors } from 'lucide-react';

function Materiel() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1611095973362-88e8e2557e58?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Matériel de Pêche Ultra Light
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez notre sélection de matériel spécialisé pour la pêche finesse
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Cannes */}
          <Link 
            to="/materiel/cannes"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1516962126636-27ad087061cc?auto=format&fit=crop&q=80")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Cannes</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Découvrez notre sélection des meilleures cannes ultra light pour la pêche en mer.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Cannes Ajing (0.5-7g)</li>
                <li>• Cannes Rockfishing (3-15g)</li>
                <li>• Cannes Polyvalentes (1-10g)</li>
              </ul>
            </div>
          </Link>

          {/* Moulinets */}
          <Link 
            to="/materiel/moulinets"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1611095772072-300c3ee8e179?auto=format&fit=crop&q=80")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Moulinets</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Les meilleurs moulinets pour la pêche aux leurres en finesse.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Moulinets 1000</li>
                <li>• Moulinets 2000</li>
                <li>• Moulinets 2500</li>
              </ul>
            </div>
          </Link>

          {/* Leurres */}
          <Link 
            to="/materiel/leurres"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Fish className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Leurres</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Guide complet des meilleurs leurres pour la pêche finesse.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Leurres Souples</li>
                <li>• Micro-Jigs</li>
                <li>• Petits Poissons Nageurs</li>
              </ul>
            </div>
          </Link>

          {/* Ligne */}
          <Link 
            to="/materiel/ligne"
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
          >
            <div 
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1414789451296-ff1c300c4131?auto=format&fit=crop&q=80")'
              }}
            />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Scissors className="w-6 h-6 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                <h2 className="text-2xl font-bold group-hover:text-[#4CAF50] transition-colors">Ligne</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Guide des meilleures lignes pour la pêche ultra light.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>• Tresses PE</li>
                <li>• Fluorocarbone Leaders</li>
                <li>• Lignes Principales</li>
              </ul>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Materiel;