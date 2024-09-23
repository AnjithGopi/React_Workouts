import {useState} from 'react'

function Count() {

    const[count,setCount]=useState(0)


     const increment=()=>{
        setCount(count+1)
     }


     const decrement=()=>{

        setCount(count-1)
     }


  return (
    <div>

        

        <button onClick={increment}>Increment</button>

        <span>{count}</span>
        <button onClick={decrement}>Decrement</button>
      
    </div>
  )
}

export default Count
