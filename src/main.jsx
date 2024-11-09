import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Asegúrate de que la hoja de estilos globales esté aquí
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-gradient-to-b from-[#FF9858] from-33% via-[#FF882C] via-59% to-[#FF7700] to-84% w-full h-full">
      <App />
    </div>
  </StrictMode>
);
