import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import  Counter  from './components/counter.jsx'
import Profilecard from './components/profilecard.jsx'
import Namechanger from './components/namechanger.jsx'
import Formdisplay from './components/form display.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Formdisplay/>
    {/* <App /> */}

    <Namechanger/>
    <Counter/>
    <Profilecard/>
  </StrictMode>,
)
