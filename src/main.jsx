import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Footer from './Componants/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <>
<App/>
<Footer/>
</>
)
