
import { useReducer } from "react"


function reducer(state,action){

    if(action.type==="increment"){
        return  {count:state.count+1}
    }

    if(action.type==="decrement"){

        return {count:state.count-1}
    }
}

function Reduce() {

    const [state,dispatch]=useReducer(reducer,{count:0})

    const increment=()=>{
        dispatch({type:"increment"})
    }
    const decrement=()=>{
        dispatch({type:"decrement"})
    }
  return (
    <div>

        <button onClick={increment}>increment</button>
        <span>{state.count}</span>
        <button onClick={decrement}>decrement</button>
      
    </div>
  )
}

export default Reduce
