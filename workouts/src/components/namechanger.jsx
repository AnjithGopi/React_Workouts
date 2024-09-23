import {useState} from "react"

function Namechanger() {

    const [name,setName]=useState("Anjith")
    const [colour,setColour]=useState("white")

    const change=()=>{
       if(name==="Anjith"){
        setName("Ambadan")
        setColour("red")

        

       }else{
        setName("Anjith")
        setColour("white")

       }

      
        
    }

  return (
    <div>

        <div>
            <h1 style={{color:colour}}>{name}</h1>
        </div><br />

        <button onClick={change}>change</button><br /><br />
      
    </div>
  )
}

export default Namechanger
