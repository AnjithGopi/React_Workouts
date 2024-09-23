import {useState} from 'react'

function Formdisplay() {

    const [input,setInput]=useState("")

    const handleChange=(event)=>{

        setInput(event.target.value)

    }

  return (
    <div>

        <form action="">
            <input type="text" value={input} onChange={handleChange} />
        </form>
        <div>
            <h1>{input}</h1>
        </div>
      
    </div>
  )
}

export default Formdisplay
