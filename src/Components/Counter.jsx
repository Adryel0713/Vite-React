import { use, useReducer, useState } from "react"
import { initialValue, counterReducer } from "../counterReduce"

const Counter = () => {

    const [value,setValue] = useState(0)
    const [state,dispatch] = useReducer(counterReducer, initialValue)

    const handleAdd = () => {
        dispatch({type: 'incrementByValue', payload: +value})
    }
    const handleSubtract = () => {
        dispatch({type: 'incrementByValue', payload: -value})
    }
  return (
    <div>
        <h1>Counter: {state.count}</h1>

        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <br />

        <div>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleAdd}>Add</button>
        </div>
    </div>
  )
}

export default Counter