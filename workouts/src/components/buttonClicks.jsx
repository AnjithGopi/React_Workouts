import {useState,useEffect} from 'react'




function ButtonClicks() {

    const[count,setCount]=useState(0)
    const[clicked,setClicked]=useState(0)


    useEffect(()=>{
        console.log("inside useEffect"+count)

        return ()=>{
            console.log("inside cleanup function"+count)
        }
    })


const increment=()=>{

    setCount(count+1)
}

const decrement=()=>{
    setClicked(clicked+1)
}
  return (
    <div>

        <button onClick={increment}>clicked {count} times</button>
        <button onClick={decrement}>clicked {clicked} times</button>
      
    </div>
  )
}

export default ButtonClicks
