
const user={
    name:"Username",
    image:"https://picsum.photos/id/237/200/300",
    size:250
}


const products=[
    {title:"Apple",isFruit:true,id:1},
    {title:"Banana",isFruit:true,id:2},
    {title:"Cabbage",isFruit:false,id:3},
]

const listitems=products.map((item)=>
    <li style={{color:item.isFruit?"Red":"Blue"}} key={item.id}>{item.title}</li>
)


const handleClick=()=>{

    alert("button clicked")
}


function User() {

    


  return (
    <div>

        <h1>{user.name}</h1>
        <img style={{width:user.size,height:user.size}} src={user.image} alt="image" />

        <ul>{listitems}</ul>

        <button onClick={handleClick}> Click me</button>

      
    </div>
  )
}

export default User
