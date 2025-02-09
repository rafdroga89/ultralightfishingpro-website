import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Facebook, Instagram, Youtube, Video, Mail, MapPin, Phone } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Fish className="w-8 h-8 text-[#4CAF50]" />
              <span className="text-xl font-bold text-white">UltralightFishingPro</span>
            </Link>
            <p className="text-sm text-gray-400">
              Votre guide expert pour la pêche ultra-light en bord de mer. Découvrez les meilleures techniques et le matériel adapté.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Suivez-nous sur Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E4405F] transition-colors"
                aria-label="Suivez-nous sur Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
                aria-label="Suivez-nous sur YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Suivez-nous sur TikTok"
              >
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/guides" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/materiel" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Matériel
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Vidéos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>1 rue de la Pêche, 75001 Paris</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+33 (0)1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>contact@ultralightfishingpro.com</span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations Légales</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/mentions-legales" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgu" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  CGU
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} UltralightFishingPro. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;