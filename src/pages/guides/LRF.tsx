import React from 'react';
import { Fish, Compass, Anchor, MapPin } from 'lucide-react';

function LRFGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf%201.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide du Light Rock Fishing (LRF)
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez l'art de la pêche ultra-légère en milieu rocheux
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Introduction au LRF</h2>
            <p className="text-gray-600 mb-4">
              Le Light Rock Fishing (LRF) est une technique de pêche ultra-légère originaire du Japon, 
              spécialement conçue pour cibler les petits poissons évoluant dans les zones rocheuses. 
              Cette approche minimaliste met l'accent sur la finesse et la précision, offrant une 
              expérience de pêche unique et excitante.
            </p>
            <p className="text-gray-600 mb-6">
              Cette technique s'est rapidement répandue en Europe, notamment en France, où elle 
              s'est adaptée à nos côtes et à nos espèces locales, devenant une pratique incontournable 
              pour les amateurs de pêche aux leurres en bord de mer.
            </p>
            
            {/* Video Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Démonstration de la Technique</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
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
            </div>
          </div>

          {/* Histoire et Définition */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Histoire et Définition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  Le LRF est né au Japon dans les années 1990, où les pêcheurs urbains cherchaient 
                  à maximiser leurs sessions de pêche dans les ports et les zones rocheuses. Cette 
                  technique s'est développée autour de l'utilisation de matériel ultra-léger et de 
                  micro-leurres pour cibler efficacement les petits poissons.
                </p>
                <p className="text-gray-600">
                  L'essence du LRF réside dans sa philosophie : il ne s'agit pas tant de la taille 
                  des prises que du plaisir de la technique et du défi qu'elle représente. Cette 
                  approche met l'accent sur la finesse du matériel et la précision des animations.
                </p>
              </div>
              <div>
                <img 
                  src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf2.jpg"
                  alt="Pêcheur pratiquant le LRF"
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          {/* Matériel */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Équipement Essentiel</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">La Canne</h3>
                <img 
                  src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf%203.jpg"
                  alt="Canne LRF"
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                />
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Longueur : 1.80m à 2.10m</li>
                  <li>Puissance : 0.5-5g</li>
                  <li>Action : Regular-Fast à Fast</li>
                  <li>Sensibilité extrême en pointe</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Le Moulinet</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Taille : 1000 à 2000</li>
                  <li>Frein précis et progressif</li>
                  <li>Bobine peu profonde</li>
                  <li>Ratio : 5.0:1 à 6.0:1</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-4">La Ligne</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Tresse PE : 0.1 à 0.3 (2-4 lb)</li>
                  <li>Fluorocarbone : 0.8 à 1.5 (1-2 m)</li>
                  <li>Nœuds : FG Knot recommandé</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Les Leurres</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img 
                    src="https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lrf%204.jpg"
                    alt="Leurres LRF"
                    className="w-full h-48 object-cover rounded-lg shadow-md mb-4"
                  />
                </div>
                <div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Micro-leurres souples (1" à 2")</li>
                    <li>Micro-jigs (1g à 3g)</li>
                    <li>Petits poissons nageurs</li>
                    <li>Têtes plombées : 0.5g à 2g</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Techniques */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Techniques de Base</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Le Rocketing</h3>
                <p className="text-gray-600">
                  Technique consistant à laisser descendre le leurre le long des rochers en contrôlant 
                  sa chute. Les touches surviennent souvent pendant cette phase.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Le Pocking</h3>
                <p className="text-gray-600">
                  Animation très lente où l'on fait "picorer" le leurre sur le fond, imitant un petit 
                  crustacé ou un poisson fouillant le substrat.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Le Micro-jigging</h3>
                <p className="text-gray-600">
                  Petits mouvements saccadés de la canne pour faire danser le leurre dans la colonne 
                  d'eau, particulièrement efficace avec les micro-jigs.
                </p>
              </div>
            </div>
          </section>

          {/* Spots et Conseils */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Spots et Conseils</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Zones Rocheuses
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Failles et crevasses</li>
                  <li>Plateaux rocheux</li>
                  <li>Zones de transition roche/sable</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Ports
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Pontons et leurs piliers</li>
                  <li>Zones d'ombre</li>
                  <li>Coins peu profonds</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Digues
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Enrochements</li>
                  <li>Zones de courant</li>
                  <li>Points de jonction</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h4 className="text-lg font-semibold text-[#2A5F8A] mb-2">Conseils Pro</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Privilégiez les périodes de marée montante</li>
                  <li>Pêchez tôt le matin ou en fin de journée</li>
                  <li>Adaptez la taille des leurres aux poissons présents</li>
                  <li>Utilisez un fluorocarbone de qualité</li>
                  <li>Vérifiez régulièrement votre ligne et vos nœuds</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LRFGuide;