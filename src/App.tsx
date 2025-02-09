import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Compass, Fish, Youtube, BookOpen, Mail, ShoppingBag, Anchor, Scissors, Search, ChevronDown, Facebook, Instagram, Video } from 'lucide-react';
import Footer from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorFallback } from './components/ErrorBoundary';
import HomePage from './pages/HomePage';
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
import CannesPage from './pages/CannesPage';

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
        <Facebook className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#E4405F] transition-colors"
        aria-label="Suivez-nous sur Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-[#FF0000] transition-colors"
        aria-label="Suivez-nous sur YouTube"
      >
        <Video className="w-6 h-6" />
      </a>
    </div>
  );
}

function MaterialDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMaterielPage = location.pathname.startsWith('/materiel');

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
          isMaterielPage ? 'text-[#2A5F8A]' : 'text-gray-600 hover:text-[#2A5F8A]'
        }`}
      >
        <span>Matériel</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
          <Link
            to="/materiel/cannes"
            className="block px-4 py-2 text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50"
          >
            Cannes
          </Link>
          <Link
            to="/materiel/moulinets"
            className="block px-4 py-2 text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50"
          >
            Moulinets
          </Link>
          <Link
            to="/materiel/leurres"
            className="block px-4 py-2 text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50"
          >
            Leurres
          </Link>
          <Link
            to="/materiel/ligne"
            className="block px-4 py-2 text-gray-600 hover:text-[#2A5F8A] hover:bg-gray-50"
          >
            Ligne
          </Link>
        </div>
      )}
    </div>
  );
}

function Header() {
  const location = useLocation();
  
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-[#2A5F8A]">
            UltralightFishingPro
          </Link>
          
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              to="/guides"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/guides'
                  ? 'text-[#2A5F8A]'
                  : 'text-gray-600 hover:text-[#2A5F8A]'
              }`}
            >
              Guides
            </Link>
            <MaterialDropdown />
            <Link
              to="/videos"
              className={`px-4 py-2 rounded-lg transition-colors ${
                location.pathname === '/videos'
                  ? 'text-[#2A5F8A]'
                  : 'text-gray-600 hover:text-[#2A5F8A]'
              }`}
            >
              Vidéos
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <SearchBar />
            <SocialMediaButtons />
          </div>
        </div>
      </div>
    </header>
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
          <Route path="/materiel/cannes" element={<CannesPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;