import UseFetch from "./UseFetch"

const App = () => {

  const [data] = UseFetch("https://jsonplaceholder.typicode.com/todos")
  // data.slice(0,5)
  return (
    <div>
      {data && data.map(item => (
        <li key={item.id}>{item.title}</li>
      ))}
    </div>
  )
}

export default App