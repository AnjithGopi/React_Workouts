import { useContext } from "react"


import { UserContext } from "./userContext"

function Cont2() {

    const{number,setNumber}= useContext(UserContext)
  return (
    <div>

        <button onClick={()=>setNumber(number+1)}>+</button>

        <div>{number}</div>
      
    </div>
  )
}

export default Cont2
