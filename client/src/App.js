import { Switch, Route } from 'react-router-dom'

import AddInspiration from "./components/AddInspiration";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
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

        <Route path="/">
          <Home />
        </Route>

      </Switch>
      
    </div>
  );
}

export default App;
