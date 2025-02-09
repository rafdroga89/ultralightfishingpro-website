import React from 'react';

function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collecte des Données</h2>
            <p className="text-gray-600">
              Nous collectons les informations que vous nous fournissez directement, notamment :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Adresse email (pour la newsletter)</li>
              <li>Données de navigation (via les cookies)</li>
              <li>Informations de contact (formulaire de contact)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Utilisation des Données</h2>
            <p className="text-gray-600">
              Nous utilisons vos données personnelles pour :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Vous fournir les services demandés</li>
              <li>Améliorer notre site web</li>
              <li>Personnaliser votre expérience</li>
              <li>Communiquer avec vous</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Protection des Données</h2>
            <p className="text-gray-600">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données 
              personnelles contre tout accès, modification, divulgation ou destruction non autorisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vos Droits</h2>
            <p className="text-gray-600">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d'opposition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600">
              Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
              contactez-nous à : privacy@ultralightfishingpro.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PolitiqueConfidentialite;