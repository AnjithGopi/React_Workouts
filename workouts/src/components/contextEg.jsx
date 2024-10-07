
import { useState,  } from "react"

import Cont2 from "./cont2"

import { UserContext } from "./userContext"



function ContextEg() {

    const [number,setNumber]=useState(0)

   


  return (
    <div>

        <UserContext.Provider value={{number,setNumber}}>

        <Cont2/>

        </UserContext.Provider>

      
    </div>
  )
}

export default ContextEg
