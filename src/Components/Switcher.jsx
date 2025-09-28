import { useState } from "react"

const Switcher = () => {

    const [sw,setSw] = useState(false)

  return (
    <div>

        {sw ? (
            <div>Light</div>
        ) : (
            <div>Dark</div>
        )}

        <br />

        <input type="text" key={sw ? "Light" : "Dark"} />

        <button onClick={() => setSw((e) => !e)}>Switch</button>

    </div>
  )
}

export default Switcher