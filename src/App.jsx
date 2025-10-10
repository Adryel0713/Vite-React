import { useReducer } from "react";


const reducer = (state, action) => {
  switch(action.type){
    case "+":
      return { ...state, count: state.count + 1}
    case "-":
      return { ...state, count: state.count - 1}
    case "reset":
      return { ...state, count: 0}

    default:
      return state;
  }
}
const App = () => {

  const initialValue = {count: 0}
  const [state,dispatch] = useReducer(reducer, initialValue);

  return (
  <div>
    <button onClick={() => dispatch({type: "+"})}>+</button>
    <button onClick={() => dispatch({type: "-"})}>-</button>
    <button onClick={() => dispatch({type: "reset"})}>reset</button>
    <h1>Count: {state.count}</h1>
  </div>
  )
}

export default App