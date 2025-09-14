const UserStatus = () => {

    const verify = () => {
        const loggedIn = true;
        const isAdmin = true;

        if(loggedIn && isAdmin) {
            return <div>Welcome Admin!</div>
        }
        
        if(loggedIn) {
            return <div>Welcome User!</div>
        }

        return "You are not logged in";
    }

  return (
    <div>
        {verify()}
    </div>
  )
}

export default UserStatus