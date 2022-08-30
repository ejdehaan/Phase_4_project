import { useState } from "react";
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom";





function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const history = useHistory()


  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      }
      history.push("/")
    });
  }

  return (
    <div>
      <div className="app_name">
      <br></br>     
      <h2>All Things Bride and Beautiful</h2>
      <br></br>
      </div>
      <div>    
      <form className='user_acct_form' onSubmit={handleSubmit}>
        <h3>Login</h3>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br></br>

        <label htmlFor="password">Password:  </label>
        <input 
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>
        <br></br>
        <button className="box3" type="submit">Login</button>
        <br></br>
        
        <Link to ="/signup">
            <h4 className="link">Signup here!</h4>
        </Link>
      </form>
      </div>
      {/* <div className='signup'>
        <h3>Sign Up Here</h3>
        <Link to ="/signup">
            <button className="box3">Signup</button>
        </Link>
      </div> */}
    </div>
  );
}

export default Login;