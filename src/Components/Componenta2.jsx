import { Data } from "../App"

const Componenta2 = ({name}) => {
  return (
    <Data.Consumer>
      {name => (
        <h1>My name is {name}</h1>
      )}
    </Data.Consumer>
  )
}

export default Componenta2