import { Switch, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'

import AddInspiration from "./components/AddInspiration";
import EditInspiration from './components/EditInspiration';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  
  const [user, setUser] = useState(null);
  const [inspo, setInspo] = useState([])
  const [inspoid, setInspoid] = useState(null)
  const [currentinspo, setCurrentinspo] = useState({})


  useEffect(() => {
    fetchInspo();
  }, []);

function fetchInspo() {
    fetch("/posts")
    .then(resp => resp.json())
    .then(data => setInspo(data))
}

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

  function handleAddInspo(newInspo) {
    setInspo(prevInspo => [...prevInspo, newInspo])
  }

  function handleGrabInspoId(inspoid) {
    setCurrentinspo(inspo.find(inspoinstance => inspoinstance.id === inspoid))
  }

  function handleUpdateInspo(updatedinspo) {
    const filteredInspoList = inspo.filter(inspo => inspo.id !== updatedinspo.id)
    setInspo([...filteredInspoList, updatedinspo].sort((a, b) => a.id - b.id))
  }

  if (!user) return (
    <div className='no-user'>
      <Route path="/login">
        <Login onLogin={handleLogin} />
      </Route>
      <Route path="/signup">
        <SignUp setUser={setUser} />
      </Route>
    </div>
  )

  return (
    <div className="App"> 

      <Header user={user} onLogout={handleLogout}/>
      <br/>
      <Navbar />
      <br/>

      <Switch>
        <Route path="/inspirations/:id/edit">
          <EditInspiration currentinspo={currentinspo} handleUpdateInspo={handleUpdateInspo} />
        </Route>
        
        <Route path="/add-inspiration">
          <AddInspiration user={user} handleAddInspo={handleAddInspo} inspo={inspo} handleGrabInspoId={handleGrabInspoId}/>
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
