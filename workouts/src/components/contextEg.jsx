
import { useState, createContext } from "react"

import Cont2 from "./cont2"

export const usercontext=createContext()

function ContextEg() {

    const [number,setNumber]=useState(0)

   


  return (
    <div>

        <usercontext.Provider value={{number,setNumber}}>

        <Cont2/>

        </usercontext.Provider>

      
    </div>
  )
}

export default ContextEg
