const Greeting = (props) => {

    const timeOfDay = props.timeOfDay;

  return (
    <div>
        {timeOfDay === "Morning" ? "Good Morning!" : timeOfDay === "Afternoon" ? "Good Afternoon!" : null}
    </div>
  )
}

export default Greeting