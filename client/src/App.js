import { Switch, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

import AddInspiration from "./components/AddInspiration";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Login from './components/Login';

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }


  return (
    <div className="App">
      <Header user={user} onLogout={handleLogout}/>
      <br/>
      <Navbar />
      <br/>

      <Switch>
        <Route path="/add-inspiration">
          <AddInspiration />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route exact path="/login">
          <Login onLogin={handleLogin} />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
