import { createContext } from "react"
import Componenta2 from "./Components/Componenta2";

export const Data = createContext();

const App = () => {


  return (
    <Data.Provider value={"adryel"}>
      <Componenta2 />
    </Data.Provider>
  )
}

export default App