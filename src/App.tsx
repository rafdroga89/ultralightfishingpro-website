import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Compass, Fish, Youtube, BookOpen, Mail, ShoppingBag, Anchor, Scissors, Search, ChevronDown, Facebook, Instagram, Video, ArrowRight } from 'lucide-react';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorFallback } from './components/ErrorBoundary';
import Guides from './pages/Guides';
import AjingGuide from './pages/guides/Ajing';
import LRFGuide from './pages/guides/LRF';
import Materiel from './pages/Materiel';
import Videos from './pages/Videos';
import Cannes from './pages/materiel/Cannes';
import TenryuLunakia from './pages/materiel/cannes/TenryuLunakia';
import Moulinets from './pages/materiel/Moulinets';
import Leurres from './pages/materiel/Leurres';
import Ligne from './pages/materiel/Ligne';
import MentionsLegales from './pages/legal/MentionsLegales';
import PolitiqueConfidentialite from './pages/legal/PolitiqueConfidentialite';
import CGU from './pages/legal/CGU';
import { LatestArticles } from './components/LatestArticles';

function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <div className={`flex items-center ${isExpanded ? 'w-64' : 'w-40'} transition-all duration-300`}>
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full bg-gray-100 pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#2A5F8A] focus:bg-white transition-all"
            onFocus={() => setIsExpanded(true)}
            onBlur={() => setIsExpanded(false)}
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}

function SocialMediaButtons() {
  return (
    <div className="flex items-center gap-4">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#1877F2] transition-colors"
        aria-label="Suivez-nous sur Facebook"
      >
        <Facebook className="w-5 h-5" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#E4405F] transition-colors"
        aria-label="Suivez-nous sur Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#FF0000] transition-colors"
        aria-label="Suivez-nous sur YouTube"
      >
        <Youtube className="w-5 h-5" />
      </a>
      <a
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black transition-colors"
        aria-label="Suivez-nous sur TikTok"
      >
        <Video className="w-5 h-5" />
      </a>
    </div>
  );
}

function MaterialDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to="/materiel"
        className={`flex items-center gap-2 text-sm font-medium ${
          isActive('/materiel') ? 'text-[#2A5F8A]' : 'text-gray-600 hover:text-[#2A5F8A]'
        }`}
      >
        <ShoppingBag className="w-4 h-4" />
        Matériel
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </Link>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-[9999]">
          <Link 
            to="/materiel/cannes"
            className={`flex items-center gap-2 px-4 py-2 text-sm ${
              isActive('/materiel/cannes') ? 'text-[#2A5F8A] bg-gray-50' : 'text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50'
            }`}
          >
            <Compass className="w-4 h-4" />
            Cannes
          </Link>
          <Link 
            to="/materiel/moulinets"
            className={`flex items-center gap-2 px-4 py-2 text-sm ${
              isActive('/materiel/moulinets') ? 'text-[#2A5F8A] bg-gray-50' : 'text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50'
            }`}
          >
            <Anchor className="w-4 h-4" />
            Moulinets
          </Link>
          <Link 
            to="/materiel/leurres"
            className={`flex items-center gap-2 px-4 py-2 text-sm ${
              isActive('/materiel/leurres') ? 'text-[#2A5F8A] bg-gray-50' : 'text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50'
            }`}
          >
            <Fish className="w-4 h-4" />
            Leurres
          </Link>
          <Link 
            to="/materiel/ligne"
            className={`flex items-center gap-2 px-4 py-2 text-sm ${
              isActive('/materiel/ligne') ? 'text-[#2A5F8A] bg-gray-50' : 'text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50'
            }`}
          >
            <Scissors className="w-4 h-4" />
            Ligne
          </Link>
        </div>
      )}
    </div>
  );
}

function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-gray-100">
          <div className="flex items-center justify-between py-3 px-4">
            <Link to="/" className="flex items-center gap-2">
              <Fish className="w-8 h-8 text-[#2A5F8A]" />
              <span className="text-xl font-bold text-[#2A5F8A]">UltralightFishingPro</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <SearchBar />
              <Link 
                to="/guides" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  isActive('/guides') ? 'text-[#2A5F8A]' : 'text-gray-600 hover:text-[#2A5F8A]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Guides
              </Link>
              <MaterialDropdown />
              <Link 
                to="/videos" 
                className={`flex items-center gap-2 text-sm font-medium ${
                  isActive('/videos') ? 'text-[#2A5F8A]' : 'text-gray-600 hover:text-[#2A5F8A]'
                }`}
              >
                <Youtube className="w-4 h-4" />
                Vidéos
              </Link>
              <div className="h-6 w-px bg-gray-200 mx-2" />
              <SocialMediaButtons />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
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
              src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//Standard_Mode_16x9_Une_sc_ne_immersive_en_bord_de_m.mp4" 
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

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/ajing" element={<AjingGuide />} />
          <Route path="/guides/lrf" element={<LRFGuide />} />
          <Route path="/materiel" element={<Materiel />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/materiel/cannes" element={<Cannes />} />
          <Route path="/materiel/cannes/tenryu-lunakia" element={<TenryuLunakia />} />
          <Route path="/materiel/moulinets" element={<Moulinets />} />
          <Route path="/materiel/leurres" element={<Leurres />} />
          <Route path="/materiel/ligne" element={<Ligne />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/cgu" element={<CGU />} />
          <Route path="/error" element={<ErrorFallback />} />
          <Route path="*" element={<Navigate to="/error" replace />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;