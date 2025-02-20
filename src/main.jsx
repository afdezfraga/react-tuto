import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*import './index.css'*/
/*import P5App from './P5/P5App.jsx'*/
/*import P6App from './P6/P6App.jsx'*/
/*import P7App from './P7/P7App.jsx'*/
/*import P8App from './P8/P8App.jsx'*/
import Tenzies from './Tenzies/Tenzies'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tenzies />
  </StrictMode>,
)
