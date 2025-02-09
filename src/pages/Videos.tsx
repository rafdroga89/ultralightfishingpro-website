import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, ArrowRight } from 'lucide-react';

function Videos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516962126636-27ad087061cc?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Vidéos Tutoriels
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Apprenez en regardant nos démonstrations en situation réelle
          </p>
        </div>
      </header>

      {/* Videos Grid */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ajing Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/aGGN4HBDGcE?si=wlvxzMYWPduyvkGl" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Technique de l'Ajing</h2>
                  <p className="text-gray-600 mb-4">
                    Découvrez les secrets de cette technique de pêche japonaise ultra-légère
                  </p>
                </div>
                <Link 
                  to="/guides/ajing" 
                  className="flex items-center text-[#2A5F8A] hover:text-[#4CAF50] transition-colors"
                >
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Fish className="w-5 h-5 text-[#2A5F8A]" />
                <span className="text-sm text-gray-500">Catégorie : Technique</span>
              </div>
            </div>
          </div>

          {/* LRF Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/jQTvIG06tAY?si=iJXUj1lqKLCCliPd" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Guide du LRF</h2>
                  <p className="text-gray-600 mb-4">
                    Découvrez les techniques du Light Rock Fishing en action
                  </p>
                </div>
                <Link 
                  to="/guides/lrf" 
                  className="flex items-center text-[#2A5F8A] hover:text-[#4CAF50] transition-colors"
                >
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Fish className="w-5 h-5 text-[#2A5F8A]" />
                <span className="text-sm text-gray-500">Catégorie : Technique</span>
              </div>
            </div>
          </div>

          {/* Tenryu Lunakia Video */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/XZ-aoGWjiBk?si=YrdvbSQ8I5gKFCHc" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">Tenryu Lunakia en Action</h2>
                  <p className="text-gray-600 mb-4">
                    Découvrez les performances exceptionnelles de la Tenryu Lunakia en situation réelle
                  </p>
                </div>
                <Link 
                  to="/materiel/cannes/tenryu-lunakia" 
                  className="flex items-center text-[#2A5F8A] hover:text-[#4CAF50] transition-colors"
                >
                  <span className="mr-2">En savoir plus</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Fish className="w-5 h-5 text-[#2A5F8A]" />
                <span className="text-sm text-gray-500">Catégorie : Matériel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;