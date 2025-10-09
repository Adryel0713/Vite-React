import { Data, Data2 } from "../App"

import { useContext } from "react"

const Component2 = () => {

    const nome = useContext(Data)
    const idade = useContext(Data2)

  return (
    <div>Eu me chamo {nome} e tenho {idade} anos.</div>
  )
}

export default Component2