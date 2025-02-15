import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import P1App from './P1/P1App.jsx'
import P2App from './P2/P2App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <P2App />
  </StrictMode>,
)
