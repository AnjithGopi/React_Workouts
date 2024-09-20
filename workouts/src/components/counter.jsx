

import { useState } from "react"

function Counter() {

    const [count,setCount]=useState(0)

    const increment=()=>{ // stops when count reaches 10
        if(count<10){
            setCount(count+1)

        }
        
    }
    const decrement=()=>{ // stops when count reaches 0
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
