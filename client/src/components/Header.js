import { Link, useHistory } from "react-router-dom";

function Header({ user, onLogout }) {

  const history = useHistory()
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
    history.push("/login")
  }
  
  return (
    <div>
      {user ? (
        <div className="header">
          <h5>Welcome, {user.username}!</h5>
          <button className="box3" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">
          <button className="box3">Login</button>
        </Link>
      )}
      <br></br>


    </div>
  )
}

export default Header