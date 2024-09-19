

function profilecard() {

    const data=[

        {id:1,name:"Anjith",email:"anjith@abc.com"},
        {id:2,name:"Rahul",email:"rahul@abc.com"},
    ]
  return (
    <div className="profile">

      { data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Email: {item.email}</p>
        </div>
      ))}

      
    </div>
  )
}

export default profilecard
