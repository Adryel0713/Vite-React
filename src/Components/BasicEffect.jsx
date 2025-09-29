import { useEffect, useState } from "react"

const BasicEffect = () => {

    const [render,setRender] = useState(false)

    useEffect(() => {

        setRender(true)
        console.log("Rendered!")

        setTimeout(() => {
            setRender(false)
        },20000)
    })

  return (
    <div>

        <p key={() => setRender(true)}>This item is rendered!</p>

    </div>
  )
}

export default BasicEffect