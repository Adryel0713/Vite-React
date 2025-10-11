import { useEffect, useRef, useState } from "react"


const Timer = () => {

    const intervalRef = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((c) => c + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

  return (
    <div>
        <h1>Timer: {count}</h1>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop Time</button>
    </div>
  )
}

export default Timer