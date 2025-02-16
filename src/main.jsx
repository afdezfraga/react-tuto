import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import P1App from './P1/P1App.jsx'
import P2App from './P2/P2App.jsx'
import P3App from './P3/P3App.jsx'
import P4App from './P4/P4App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <P4App />
  </StrictMode>,
)
