import { createContext } from "react"
import Component1 from "./Components/Component1"

export const Data = createContext()
export const Data2 = createContext()

const App = () => {

  const name = "Adryel"
  const age = 22;

  return (
  <div>
    <Data.Provider value={name}>
      <Data2.Provider value={age}>
        <Component1 />
      </Data2.Provider>
    </Data.Provider>
  </div>
  )
}

export default App