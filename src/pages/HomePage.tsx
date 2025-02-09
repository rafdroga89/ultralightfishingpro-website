import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { LatestArticles } from '../components/LatestArticles';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-[#2A5F8A] mb-4">
          Bienvenue sur UltralightFishingPro
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Votre guide expert pour la pêche ultra-light et le rockfishing
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/guides"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-[#2A5F8A] mb-4">Guides</h2>
            <p className="text-gray-600 mb-4">
              Découvrez nos guides complets sur l'ajing et le rockfishing
            </p>
            <span className="text-[#2A5F8A] flex items-center justify-center">
              En savoir plus <ArrowRight className="ml-2" />
            </span>
          </Link>
          <Link
            to="/materiel"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-[#2A5F8A] mb-4">Matériel</h2>
            <p className="text-gray-600 mb-4">
              Le meilleur équipement pour la pêche ultra-light
            </p>
            <span className="text-[#2A5F8A] flex items-center justify-center">
              Découvrir <ArrowRight className="ml-2" />
            </span>
          </Link>
          <Link
            to="/videos"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-semibold text-[#2A5F8A] mb-4">Vidéos</h2>
            <p className="text-gray-600 mb-4">
              Tutoriels et sessions de pêche en vidéo
            </p>
            <span className="text-[#2A5F8A] flex items-center justify-center">
              Voir les vidéos <ArrowRight className="ml-2" />
            </span>
          </Link>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-[#2A5F8A] mb-8 text-center">
          Derniers Articles
        </h2>
        <LatestArticles />
      </section>
    </div>
  );
}
