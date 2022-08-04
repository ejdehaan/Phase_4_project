import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">
          <button className="box2">Home</button>
        </Link>
        
        <Link to="/add-inspiration">
          <button className="box">Add Inspiration</button>
        </Link>

        <Link to ="/about">
          <button className="box3">Contact</button>
        </Link>

    </div>
  )
}

export default Navbar