import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Cannes() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1516962126636-27ad087061cc?auto=format&fit=crop&q=80)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cannes Ultra Light
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Guides et comparatifs des meilleures cannes pour la pêche finesse
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <Link 
          to="/materiel/cannes/tenryu-lunakia"
          className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200"
        >
          <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              className="h-48 md:h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lunakia%20icone.webp")'
              }}
            />
            <div className="col-span-2 p-6">
              <div className="flex items-start gap-4">
                <Star className="w-8 h-8 text-[#2A5F8A] flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2A5F8A] transition-colors">
                    Tenryu Lunakia : L'Excellence Japonaise
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Une canne haut de gamme conçue pour les passionnés de pêche ultra-légère en milieu marin
                  </p>
                  <div className="flex items-center text-[#2A5F8A] hover:text-[#4CAF50] transition-colors">
                    Lire le test complet <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
}

export default Cannes;