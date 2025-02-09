import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Compass, 
  Fish, 
  ShoppingBag, 
  Youtube, 
  Anchor, 
  Map,
  Scale,
  Target
} from 'lucide-react';
import { LatestArticles } from '../components/LatestArticles';
import { AdSense } from '../components/AdSense';

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <Anchor className="w-16 h-16 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Pêche Ultra Light en Bord de Mer
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            Découvrez les meilleures techniques d'ajing et de rockfishing avec nos guides experts
          </p>
          <Link 
            to="/materiel"
            className="bg-[#4CAF50] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#45a049] transition-all duration-300 inline-flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-5 h-5" />
            Découvrir le Matériel
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-[#2A5F8A]">
            Explorez Nos Ressources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link 
              to="/guides"
              className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#4CAF50]"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full group-hover:bg-[#4CAF50]/10 transition-colors">
                  <BookOpen className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                Guides Techniques
              </h3>
              <p className="text-gray-600">
                Maîtrisez l'art de la pêche ultra-light avec nos guides détaillés
              </p>
              <div className="mt-6 flex justify-center items-center text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                <span className="mr-2">En savoir plus</span>
                <Compass className="w-4 h-4 animate-pulse" />
              </div>
            </Link>

            <Link 
              to="/materiel"
              className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#4CAF50]"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full group-hover:bg-[#4CAF50]/10 transition-colors">
                  <Scale className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                Comparatifs Matériel
              </h3>
              <p className="text-gray-600">
                Trouvez l'équipement parfait pour votre style de pêche
              </p>
              <div className="mt-6 flex justify-center items-center text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                <span className="mr-2">Découvrir</span>
                <Target className="w-4 h-4 animate-pulse" />
              </div>
            </Link>

            <Link 
              to="/videos"
              className="group bg-white p-8 rounded-xl shadow-lg text-center block transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100 hover:border-[#4CAF50]"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-[#2A5F8A]/10 rounded-full group-hover:bg-[#4CAF50]/10 transition-colors">
                  <Youtube className="w-8 h-8 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                Vidéos Tutoriels
              </h3>
              <p className="text-gray-600">
                Apprenez en regardant nos démonstrations en situation réelle
              </p>
              <div className="mt-6 flex justify-center items-center text-[#2A5F8A] group-hover:text-[#4CAF50] transition-colors">
                <span className="mr-2">Voir les vidéos</span>
                <Map className="w-4 h-4 animate-pulse" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <AdSense
            client="pub-6202151362945703"
            slot="1234567890"  // Remplacez par votre vrai slot ID
            style={{ display: 'block', marginBottom: '20px' }}
          />
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2A5F8A]">
            Derniers Articles
          </h2>
          <LatestArticles />
        </div>
      </section>
    </div>
  );
}
