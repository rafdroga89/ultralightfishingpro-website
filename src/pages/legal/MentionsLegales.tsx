import React from 'react';

function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions Légales</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Éditeur du Site</h2>
            <p className="text-gray-600">
              UltralightFishingPro<br />
              Société par actions simplifiée (SAS)<br />
              Capital social : 10 000€<br />
              RCS Paris B 123 456 789<br />
              Siège social : 1 rue de la Pêche, 75001 Paris<br />
              Téléphone : +33 (0)1 23 45 67 89<br />
              Email : contact@ultralightfishingpro.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Directeur de la Publication</h2>
            <p className="text-gray-600">
              Jean Dupont, Président de UltralightFishingPro
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement</h2>
            <p className="text-gray-600">
              Le site UltralightFishingPro est hébergé par :<br />
              Netlify, Inc.<br />
              2325 3rd Street, Suite 215<br />
              San Francisco, California 94107<br />
              United States
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété Intellectuelle</h2>
            <p className="text-gray-600">
              L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. 
              Toute reproduction ou représentation, intégrale ou partielle, par quelque procédé que ce soit, 
              faite sans le consentement préalable et écrit de UltralightFishingPro est illicite et constitue 
              une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crédits Photos</h2>
            <p className="text-gray-600">
              Les photos utilisées sur ce site proviennent de Unsplash et sont utilisées conformément 
              à leur licence d'utilisation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MentionsLegales;