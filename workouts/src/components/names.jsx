

function names({state}) {
  return (
    <div>
    {state.map((item)=>(
       <div key={item.id}>
        <h1>{item.name}</h1>
        <h2>{item.language}</h2>
       </div>

    ))}
    </div>
  )
}

export default names
