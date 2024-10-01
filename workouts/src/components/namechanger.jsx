
import axios from "axios"
import{useState} from "react"

function Namechanger() {

  const [data,setData]=useState([])

  const call=()=>{
    axios.get('https://api.gofile.io/servers').then((response)=>{
      console.log(response.data)
      setData(response.data.data.servers)
    })
  }

  return (
    <div>

        
        <button onClick={call}>click</button><br /><br />

        <div>
        {data.map((item, index) => (
          <h1 key={index}>{item.name}</h1>  // Assuming each item has a 'name' property
        ))}
        </div>
      
    </div>
  )
}

export default Namechanger
