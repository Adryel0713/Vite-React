import Greeting from "./Components/Greeting"
import UserStatus from "./Components/UserStatus"
import Weather from "./Components/Weather"

const App = () => {
  return (
    <section>
      <Weather temperature={25.5}/>
      <UserStatus/>
      <Greeting timeOfDay="Morning"/>
    </section>
  )
}

export default App