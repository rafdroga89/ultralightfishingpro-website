import React from 'react';
import { Fish, Compass, Anchor, MapPin } from 'lucide-react';

function AjingGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative h-[400px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//aji%20banniere.webp")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-[#2A5F8A] bg-opacity-70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-6">
            Guide Complet de l'Ajing
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Découvrez cette technique japonaise ultra-légère qui révolutionne la pêche en Europe
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Introduction à l'Ajing</h2>
            <p className="text-gray-600 mb-4">
              L'Ajing est une technique de pêche ultra-légère originaire du Japon, spécialement conçue pour la pêche du maquereau. Cette approche minimaliste met l'accent sur la sensibilité et la précision, utilisant des leurres très légers et du matériel adapté.
            </p>
            <p className="text-gray-600 mb-6">
              Cette technique s'est rapidement répandue en Europe, notamment en France, où elle s'est avérée efficace pour diverses espèces de poissons en bord de mer.
            </p>
            
            {/* Video Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Démonstration de la Technique</h3>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg">
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
            </div>
          </div>

          {/* Espèces Cibles */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Espèces Cibles</h2>
            <div>
              <h3 className="text-xl font-semibold mb-4">Espèces Principales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                      style={{
                        backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//maquereau.jpeg")'
                      }}
                    />
                    <div className="flex items-start space-x-3">
                      <Fish className="w-5 h-5 text-[#2A5F8A] mt-1" />
                      <div>
                        <span className="font-semibold">Maquereau</span>
                        <p className="text-gray-600 text-sm">
                          Très présent en Méditerranée, réagit bien aux techniques de l'ajing.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                      style={{
                        backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//chinchard.jpeg")'
                      }}
                    />
                    <div className="flex items-start space-x-3">
                      <Fish className="w-5 h-5 text-[#2A5F8A] mt-1" />
                      <div>
                        <span className="font-semibold">Chinchard</span>
                        <p className="text-gray-600 text-sm">
                          L'espèce phare de cette technique, particulièrement active la nuit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow p-4">
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                      style={{
                        backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//alose.jpeg")'
                      }}
                    />
                    <div className="flex items-start space-x-3">
                      <Fish className="w-5 h-5 text-[#2A5F8A] mt-1" />
                      <div>
                        <span className="font-semibold">Alose</span>
                        <p className="text-gray-600 text-sm">
                          Poisson puissant et combatif, idéal pour la pêche en ultra-light.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow p-4">
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                      style={{
                        backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//bar%20mouchete.jpeg")'
                      }}
                    />
                    <div className="flex items-start space-x-3">
                      <Fish className="w-5 h-5 text-[#2A5F8A] mt-1" />
                      <div>
                        <span className="font-semibold">Bar Moucheté</span>
                        <p className="text-gray-600 text-sm">
                          Espèce recherchée pour sa combativité et sa technique de chasse.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Matériel Essentiel */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A]">Matériel Essentiel</h2>
            
            {/* Cannes */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-[#2A5F8A] mb-6">Les Cannes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//canne.jpg")'
                    }}
                  />
                  <h4 className="text-lg font-semibold">Spécifications Techniques</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Longueur : 1.80m à 2.10m</li>
                    <li>Puissance : 0.5-7g</li>
                    <li>Action : Fast ou Regular-Fast</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Points Clés</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Sensibilité en pointe</li>
                    <li>Légèreté</li>
                    <li>Équilibre</li>
                    <li>Solidité du blank</li>
                  </ul>
                  <p className="mt-4 text-gray-600">
                    La canne est l'élément le plus important de votre équipement. Elle doit être capable de propulser des leurres très légers tout en gardant une excellente sensibilité pour détecter les touches les plus délicates.
                  </p>
                </div>
              </div>
            </div>

            {/* Moulinets */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-[#2A5F8A] mb-6">Les Moulinets</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//moulinet%20aji.avif")'
                    }}
                  />
                  <h4 className="text-lg font-semibold">Spécifications Techniques</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Taille : 500 à 1500</li>
                    <li>Capacité : PE 0.1-0.4 (100m min)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Points Clés</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Frein précis et progressif</li>
                    <li>Bobine peu profonde recommandée</li>
                    <li>Anti-retour infini indispensable</li>
                    <li>Bonne étanchéité nécessaire</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ligne */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-[#2A5F8A] mb-6">La Ligne</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//ajing%20line.jpg")'
                    }}
                  />
                  <h4 className="text-lg font-semibold">Types de Lignes</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Tresse PE (0.1 à 0.4)</li>
                    <li>Fluorocarbone (0.8 à 1.5)</li>
                    <li>Polyester Ester (0.1 à 0.3)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Caractéristiques</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Tresse</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>4 à 8 lbs</li>
                        <li>Colorée de préférence</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Fluorocarbone</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Longueur : 1.5 à 2m</li>
                        <li>Qualité premium conseillée</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Polyester (Ester)</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Excellente sensibilité</li>
                        <li>Faible élasticité</li>
                        <li>Résistance aux UV</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leurres */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-[#2A5F8A] mb-6">Les Leurres</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//lure%20ajing.avif")'
                    }}
                  />
                  <h4 className="text-lg font-semibold">Types de Leurres</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Leurres souples (1" à 2")</li>
                    <li>Micro-jigs (1g à 7g)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Caractéristiques</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Leurres Souples</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Forme fine et allongée</li>
                        <li>Queue très mobile</li>
                        <li>Matériaux souples</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Micro-jigs</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Profil hydrodynamique</li>
                        <li>Nage erratique</li>
                        <li>Coloris naturels</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Têtes Plombées */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-[#2A5F8A] mb-6">Les Têtes Plombées</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div 
                    className="w-full h-48 bg-cover bg-center rounded-lg shadow-md"
                    style={{
                      backgroundImage: 'url("https://fjyyotvzlolbkgvobbhe.supabase.co/storage/v1/object/public/images//tete%20plombee%20aji.jpg")'
                    }}
                  />
                  <h4 className="text-lg font-semibold">Spécifications</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>Poids : 0.5g à 7g</li>
                    <li>Hameçons : #6 à #12</li>
                    <li>Formes variées</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Caractéristiques</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Types de Têtes</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Football (zones rocheuses)</li>
                        <li>Round (polyvalente)</li>
                        <li>Dart (précision)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#2A5F8A]">Points Clés</h5>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Hameçon fin de qualité</li>
                        <li>Peinture anti-corrosion</li>
                        <li>Œillet renforcé</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Techniques de Base */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Techniques de Base</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Le Slow Fall</h3>
                <p className="text-gray-600">
                  Technique principale de l'ajing, consistant à laisser descendre le leurre le plus naturellement possible. Le contrôle de la vitesse de chute est essentiel.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Le Twitching</h3>
                <p className="text-gray-600">
                  Petites animations saccadées de la canne pour donner vie au leurre. L'amplitude des mouvements doit rester minimale.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">La Récupération</h3>
                <p className="text-gray-600">
                  Alternance de phases lentes et rapides, avec des pauses fréquentes pour laisser le leurre redescendre.
                </p>
              </div>
            </div>
          </section>

          {/* Spots Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold text-[#2A5F8A] mb-6">Les Meilleurs Spots</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Ports
                </h3>
                <p className="text-gray-600 mb-4">
                  Les zones portuaires sont particulièrement propices à l'ajing, notamment :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Les coins sombres entre les pontons</li>
                  <li>Les zones éclairées la nuit</li>
                  <li>Les pieds de quai</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Digues
                </h3>
                <p className="text-gray-600 mb-4">
                  Les digues offrent d'excellents postes, particulièrement :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Les zones rocheuses au pied des digues</li>
                  <li>Les angles et recoins</li>
                  <li>Les zones de courant modéré</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#2A5F8A]" />
                  Les Zones Rocheuses
                </h3>
                <p className="text-gray-600 mb-4">
                  Les zones rocheuses naturelles sont très productives :
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Les petits plateaux rocheux</li>
                  <li>Les failles et cavités</li>
                  <li>Les zones de transition sable/roche</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <h4 className="text-lg font-semibold text-[#2A5F8A] mb-2">Conseil Pro</h4>
                <p className="text-gray-600">
                  Les meilleurs moments pour pratiquer l'ajing sont tôt le matin et en soirée, 
                  particulièrement pendant les changements de marée. La nuit est également une 
                  période très productive, surtout dans les zones portuaires éclairées.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AjingGuide;