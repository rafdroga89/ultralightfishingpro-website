import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { testSupabaseConnection } from './lib/supabaseTest';

console.log('🚀 Application starting...');

// Test de connexion à Supabase
testSupabaseConnection().then(success => {
  console.log('Test de connexion Supabase terminé:', success ? 'Succès' : 'Échec');
});

const root = document.getElementById('root');
console.log('📍 Root element found:', !!root);

if (root) {
  console.log('🏗️ Creating React root and rendering app...');
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
  console.log('✅ Initial render complete');
} else {
  console.error('❌ Root element not found! Check if index.html has a div with id="root"');
}