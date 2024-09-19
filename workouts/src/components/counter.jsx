

import { useState } from "react"

function Counter() {

    const [count,setCount]=useState(0)

    const increment=()=>{
        if(count<10){
            setCount(count+1)

        }
        
    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)

        }
        
    }


  return (
    <div>

        <button onClick={increment}>+</button><br /><br />
        <div>
            {count}
        </div><br /><br />
        <button onClick={decrement}>-</button>

       
      
    </div>
  )
}

export default Counter
