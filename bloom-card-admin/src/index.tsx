import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './auth/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // TypeScript'te root'un tipi belirtildi

root.render(
  <ReactKeycloakProvider
    authClient={keycloak}
    initOptions={{
      onLoad: 'check-sso', // Kullanıcı giriş yapmamışsa oturum açma sayfasına yönlendir
      checkLoginIframe: false,  // Giriş durumunu kontrol etmek için iframe kullanma
    }}
  >
    
      <App />
    
  </ReactKeycloakProvider>
);
