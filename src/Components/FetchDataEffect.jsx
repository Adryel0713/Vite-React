import { useEffect, useState } from "react"

const FetchDataEffect = () => {

    const [data,setData] = useState([])

    useEffect(() => {
        async function exibir() {
            const everything = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await everything.json()

            if(data && data.length) setData(data)
        }

    exibir()
    }, [])

  return (
    <div>

        {data.slice(0,1).map((d) => (
            <li key={Math.random()}>{d.title}</li>
        ))}

    </div>
  )
}

export default FetchDataEffect