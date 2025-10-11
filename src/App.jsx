import { useId } from "react"

const App = () => {
  const id = useId();
  return (
    <div>
      <label htmlFor={`${id}-email`}></label>
      <input type="text" id={`${id}-email`} placeholder="email" /> <br /> <br />
      <label htmlFor={`${id}-password`}></label>
      <input type="password" id={`${id}-password`} placeholder="password"/>
    </div>
  )
}

export default App