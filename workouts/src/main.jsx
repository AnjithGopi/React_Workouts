import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import  Count  from './components/count.jsx'
import Profilecard from './components/profilecard.jsx'
import Namechanger from './components/namechanger.jsx'
import Formdisplay from './components/form display.jsx'
import User from './components/user.jsx'
import ButtonClicks from './components/buttonClicks.jsx'
import Names from './components/names.jsx'
import ContextEg from './components/contextEg.jsx'

const states=[{name:"kerala", language:"Malayalam"},{name:"TamilNadu",language:"Tamil"}]

createRoot(document.getElementById('root')).render(

 
  <StrictMode>

    <ContextEg/>
    <Names state={states}/>
    
    

    <ButtonClicks/>

    <Formdisplay/>
    <Count/>
    {/* <App /> */}

    <Namechanger/>
    {/* <Counter/> */}
    <Profilecard/>
    <User/>
  </StrictMode>,
)
