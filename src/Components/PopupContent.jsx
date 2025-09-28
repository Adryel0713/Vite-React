import { createPortal } from "react-dom"

const PopupContent = ({copie}) => {
  return createPortal (
    <section>
        {copie && (
            <div style={{padding: '1rem 0'}}>Copied to clipboard!</div>
        )}
    </section>,
    document.querySelector("#teste")
)
}

export default PopupContent