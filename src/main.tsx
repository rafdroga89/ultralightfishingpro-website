import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { testSupabaseConnection } from './lib/supabaseTest';

// Test de connexion à Supabase
testSupabaseConnection().then(success => {
  console.log('Test de connexion Supabase terminé:', success ? 'Succès' : 'Échec');
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);