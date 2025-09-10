import ProductList from "./Components/ProductList";
import UserList from "./Components/UserList";

const App = () => {
  const userInfo = [
    {
      username: "HuXn",
      email: "teste@gmail.com",
      location: "USA",
    },
    {
      username: "John",
      email: "jd@gmail.com",
      location: "Arab",
    },
    {
      username: "Alex",
      email: "alexmersion@gmail.com",
      location: "India",
    }
  ]
  return (
  <main>
    {/* { userInfo.map(user => (
      <ul key={user}>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Location: {user.location}</li>
      </ul>
    ))} */}
    {/* { userInfo.map(({username,email,location}) => (
      <ul key={Math.random()}>
        <li>{username}</li>
        <li>{email}</li>
        <li>{location}</li>
      </ul>
    ))} */}

    <UserList/>
    <br /> <br />
    <ProductList/>
  </main>
  )

}

export default App;