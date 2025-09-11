// import Person from "./Components/Person"
// import Product from "./Components/Product"

import Card from "./Components/Card"

const App = () => {
  return (
    <div>
      {/* <Person name="Adryel" age={22}/>
      <Product name="cadeira" price={125.00}/> */}

      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for card 1</p>
      </Card>
      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card 2</p>
      </Card>
    </div>
  )
}

export default App