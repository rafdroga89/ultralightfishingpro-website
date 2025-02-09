import React from 'react';

function CGU() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptation des Conditions</h2>
            <p className="text-gray-600">
              En accédant et en utilisant le site UltralightFishingPro, vous acceptez d'être lié par les 
              présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas 
              utiliser le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Utilisation du Site</h2>
            <p className="text-gray-600">
              Vous vous engagez à utiliser le site conformément aux lois en vigueur et aux présentes 
              conditions. Il est notamment interdit de :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Reproduire, copier, vendre ou exploiter le contenu du site</li>
              <li>Utiliser le site d'une manière qui pourrait l'endommager</li>
              <li>Tenter d'accéder à des zones restreintes du site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Contenu</h2>
            <p className="text-gray-600">
              Le contenu du site est fourni à titre informatif uniquement. Nous nous efforçons de maintenir 
              les informations à jour et exactes, mais nous ne garantissons pas l'exhaustivité ou 
              l'exactitude de ce contenu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Propriété Intellectuelle</h2>
            <p className="text-gray-600">
              Tout le contenu du site (textes, images, logos, etc.) est protégé par les droits de propriété 
              intellectuelle. Toute reproduction ou utilisation non autorisée est interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Modification des CGU</h2>
            <p className="text-gray-600">
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications 
              prennent effet dès leur publication sur le site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact</h2>
            <p className="text-gray-600">
              Pour toute question concernant ces CGU, contactez-nous à : legal@ultralightfishingpro.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default CGU;