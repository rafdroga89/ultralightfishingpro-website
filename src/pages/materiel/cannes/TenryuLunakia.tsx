import React from 'react';
import { Star, ShieldCheck, Sparkles } from 'lucide-react';

function TenryuLunakia() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//Tenryu-Lunakia-.webp")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Tenryu Lunakia
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            L'Excellence Japonaise dans la Pêche Ultra-Light
          </p>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-16 px-4">
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Introduction */}
          <div className="p-8 border-b border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              La Tenryu Lunakia est une canne à pêche haut de gamme conçue pour les passionnés de pêche ultra-légère en milieu marin. 
              Fabriquée au Japon, elle incarne l'expertise et l'innovation de Tenryu, offrant une expérience de pêche exceptionnelle.
            </p>
          </div>

          {/* Video Section */}
          <div className="p-8 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Démonstration en Action</h2>
            <div className="aspect-video w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
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
          </div>

          {/* Key Features */}
          <div className="p-8 bg-gray-50">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Caractéristiques Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Star className="w-8 h-8 text-[#2A5F8A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Sensibilité Accrue</h3>
                <p className="text-gray-600">
                  Grâce à l'utilisation de matériaux avancés comme le C.N.T (Carbon Nano Tube) dans la section du talon, 
                  la Lunakia assure une transmission optimale des sensations, permettant de détecter les touches les plus subtiles.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#2A5F8A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Technologie Magna-Flex</h3>
                <p className="text-gray-600">
                  Certains modèles de la série intègrent la technologie Magna-Flex, offrant un équilibre parfait entre 
                  puissance et sensibilité, idéal pour diverses techniques de pêche légère.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Sparkles className="w-8 h-8 text-[#2A5F8A] mb-4" />
                <h3 className="text-lg font-semibold mb-2">Composants Premium</h3>
                <p className="text-gray-600">
                  Équipée de guides K avec cadre en acier inoxydable et anneaux SIC, ainsi qu'un design exclusif 
                  utilisant le textile Nishijin sur la poignée et le porte-moulinet.
                </p>
              </div>
            </div>
          </div>

          {/* Models Section */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Modèles Disponibles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK532S-ULS</h3>
                  <p className="text-gray-600">
                    Modèle court pour une pêche finesse, idéal pour des têtes plombées de 0,4 à 0,8 g.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK582S-LS</h3>
                  <p className="text-gray-600">
                    Conçu pour des montages légers jusqu'à 2 g, offrant une action douce et progressive.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK632S-LMLS</h3>
                  <p className="text-gray-600">
                    Parfait pour des têtes plombées de 1 g à des montages Carolina légers jusqu'à 3 g.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK6102S-MLT</h3>
                  <p className="text-gray-600">
                    Spécialement conçu pour la pêche de réaction, adapté aux têtes plombées de 1 à 2 g et aux leurres métalliques jusqu'à 3 g.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK752S-MMHT</h3>
                  <p className="text-gray-600">
                    Modèle puissant pour des têtes plombées de 1,5 à 3 g et des petits leurres jusqu'à 10 g.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-[#2A5F8A] mb-3">LK822S-HT</h3>
                  <p className="text-gray-600">
                    Idéal pour les lancers longs en zones rocheuses, capable de gérer des têtes plombées de 5 g à des leurres métalliques de 20 g.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Conclusion */}
          <div className="p-8 bg-gray-50">
            <p className="text-gray-700 leading-relaxed">
              La Tenryu Lunakia est conçue pour les pêcheurs recherchant précision, sensibilité et performance. 
              Que vous pêchiez en bord de mer ou sur des structures rocheuses, cette canne répondra à vos attentes 
              les plus élevées. Sa fabrication japonaise et ses composants de qualité en font un choix privilégié 
              pour les amateurs de pêche ultra-légère exigeants.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default TenryuLunakia;