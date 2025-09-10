const Greeting = () => {
    let date = new Date();
    let name = "John";
  return (
    <div>
        <h1>{name}</h1>
        <p>Data/Hora: {date.toLocaleDateString()} {date.toLocaleTimeString()}</p>
    </div>
  )
}

export default Greeting