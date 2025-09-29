import { useEffect, useState } from "react";

const CounterEffect = () => {

    const [value,setValue] = useState(0)

    const update = document.querySelector("title");

    useEffect(() => {
        update.innerHTML = value
    })
  return (
    <div>

    <div className="increment">{value}</div>
    <button onClick={() => setValue(value + 1)}>Increment</button>

    </div>
  )
}

export default CounterEffect