import React,{useContext} from 'react'
import { Link } from 'react-router-dom'

import { ThemeContext,ToggleContext } from '../App.js'

function Header() {
    const theme = useContext(ThemeContext);

    const toggle = useContext(ToggleContext);

  return (
    <nav className={`navbar navbar-expand-lg  text-reset bg-${theme?'black':'white'} text-${theme?'white':'black'}`}>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className={`text-${theme?'white':'black'} me-3 text-decoration-none`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`text-${theme?'white':'black'} me-3 text-decoration-none`} to="/calculator">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link className={`text-${theme?'white':'black'} me-3 text-decoration-none`} to="/todolist">Todoes</Link>
        </li>
        <li className="nav-item">
          <Link className={`text-${theme?'white':'black'} me-3 text-decoration-none`} to="/form">Form Demo</Link>
        </li>
        <li className="nav-item me-auto">
          <Link className={`text-${theme?'white':'black'} me-3 text-decoration-none`} to="/generatebox">Boxes Game</Link>
        </li>
        
        
      </ul>
        <button className={`btn btn-${theme?'danger':'success'}`} onClick={()=>{toggle()}}>Change Theme</button>
      
    </div>
  </div>
</nav>
  )
}

export default Header
