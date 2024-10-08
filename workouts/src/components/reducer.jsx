
import { useReducer } from "react"


function reducer(state,action){

    if(action.type==="increment"){
        return  {count:state.count+action.value}
    }

    if(action.type==="decrement"){

        return {count:state.count-action.value}
    }
}

function Reduce() {


    let initialState={
        count:0
    }

    const [state,dispatch]=useReducer(reducer,initialState)

    const increment=()=>{
        dispatch({type:"increment",value:1})
    }
    const decrement=()=>{
        dispatch({type:"decrement",value:1})
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
