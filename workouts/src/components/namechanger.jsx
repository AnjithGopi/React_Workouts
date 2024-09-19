import {useState} from "react"

function Namechanger() {

    const [name,setName]=useState("Anjith")

    const change=()=>{
       if(name==="Anjith"){
        setName("Amal")

       }else{
        setName("Anjith")

       }

      
        
    }

  return (
    <div>

        <div>
            <h1>{name}</h1>
        </div><br />

        <button onClick={change}>change</button><br /><br />
      
    </div>
  )
}

export default Namechanger
