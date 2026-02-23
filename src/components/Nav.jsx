import "../App.css"
import { NavLink } from "react-router-dom"

import logo from "../assets/newlogo.png"

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="nav-left">
          <img src={logo} alt="logo" className="nav-logo" />
          <h4 className="nav-name">Fatema Abdulla</h4>
        </div>

        <div className="nav-center">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
        </div>

      </div>
    </nav>
  )
}

export default Nav
