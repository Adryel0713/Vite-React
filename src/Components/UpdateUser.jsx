import { useState, useContext } from "react"
import { UserContext } from "../UserContext"

const UpdateUser = () => {

  const {updateUser} = useContext(UserContext)
  const [newName, setNewName] = useState('')

  const handleSubmit = e => {
    e.preventDefault();

    if(newName.trim()){
      updateUser(newName)
      setNewName("")
    }
  }

  return (
    <div>
      <h2>Update User name</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />

        <button type="submit">enviar</button>
      </form>
    </div>
  )
}

export default UpdateUser