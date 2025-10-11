import { useRef } from "react";

const FocusInput = () => {
    
    const value = useRef(null)

    const click = () => {
        if(value.current){
            value.current.focus()
        }
    }

    return (
        <div>
            <input type="text" ref={value} placeholder="click in the button to focus!"/>
            <button onClick={click}>focus</button>
        </div>
    )
}

export default FocusInput