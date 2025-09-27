import { useState } from "react"

const Counter = () => {

    const [create, setCreate] = useState(0)

  return (
    <div>
        <p>Mostrar: {create}</p>
        <button onClick={() => setCreate(create + 1)} style={{marginRight: "1rem"}}>adicionar</button>
        
        <button onClick={() => setCreate(create - 1)}>Deletar</button>
    </div>
  )
}

export default Counter