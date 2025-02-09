import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Fish, ShoppingBag, Youtube } from 'lucide-react';
import { LatestArticles } from '../components/LatestArticles';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section avec vidéo en arrière-plan */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source 
              src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images/Standard_Mode_16x9_Une_sc_ne_immersive_en_bord_de_m.mp4" 
              type="video/mp4" 
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Pêche Ultra Light en Bord de Mer
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Découvrez les meilleures techniques d'ajing et de rockfishing avec nos guides experts
          </p>
          <Link 
            to="/materiel"
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#45a049] transition-colors inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Découvrir le Matériel
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link 
            to="/guides"
            className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
          >
            <div className="mb-4 flex justify-center">
              <Fish className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4CAF50] transition-colors">
              Guides Techniques
            </h3>
            <p className="text-gray-600">
              Apprenez les meilleures techniques de pêche ultra-light avec nos experts
            </p>
          </Link>
          <Link 
            to="/materiel"
            className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
          >
            <div className="mb-4 flex justify-center">
              <ShoppingBag className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4CAF50] transition-colors">
              Comparatifs Matériel
            </h3>
            <p className="text-gray-600">
              Trouvez le meilleur équipement adapté à votre style de pêche
            </p>
          </Link>
          <Link 
            to="/videos"
            className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:bg-gray-50"
          >
            <div className="mb-4 flex justify-center">
              <Youtube className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4CAF50] transition-colors">
              Vidéos Tutoriels
            </h3>
            <p className="text-gray-600">
              Regardez nos démonstrations en situation réelle
            </p>
          </Link>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Derniers Articles</h2>
          <LatestArticles />
        </div>
      </section>
    </div>
  );
}
