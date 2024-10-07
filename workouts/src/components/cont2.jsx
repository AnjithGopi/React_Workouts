import { useContext } from "react"
import { usercontext } from "./contextEg"



function Cont2() {

    const{number,setNumber}= useContext(usercontext)
  return (
    <div>

        <button onClick={()=>setNumber(number+1)}>+</button>
      
    </div>
  )
}

export default Cont2
