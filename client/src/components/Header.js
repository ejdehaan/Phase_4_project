import { Link } from "react-router-dom";

function Header({ user, onLogout }) {
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout());
  }
  
  return (
    <div>
      <div className="header">
          <h1>We're Getting Married!</h1>
      </div>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Click Here to Login</Link>
      )}
    </div>
  )
}

export default Header