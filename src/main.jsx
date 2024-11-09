import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <body className="bg-gradient-to-b from-[#FF9858] from-33% via-[#FF882C] via-59% to-[#FF7700] to-84% w-screen">
      <App />
    </body>
  </StrictMode>,
)
