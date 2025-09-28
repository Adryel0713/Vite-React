import { useState } from "react"

const CopyInput = () => {

    const [inputValue,setInputValue] = useState('')
    const [copy,setCopy] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(inputValue).then(() => {
            setCopy(true)
            setInputValue('copy!')

            setTimeout(() => {
                setCopy(false)
                setInputValue('')
            }, 2000)
            
        })
    }
  return (
    <div>

        <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Name" />
        <button onClick={handleCopy}>Copy</button>
    </div>
  )
}

export default CopyInput