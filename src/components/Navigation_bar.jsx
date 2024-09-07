import React, { useState } from 'react';
import '../css/Navigation_bar.css';
import { NavLink } from 'react-router-dom';

const Navigation_bar = () => {
  const [navActive, setNavActive] = useState(false);

  const handleBurgerClick = () => {
      setNavActive(!navActive);
  };

  return (
    <nav className="navbar">
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={handleBurgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
      </div>
      <div className="navbar-brand">
        Portfolio
      </div>
      <ul  className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <li><NavLink exact="true" to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active">About</NavLink></li>
        <li><NavLink to="/education" activeclassname="active">Education</NavLink></li>
        <li><NavLink to="/skills" activeclassname="active">Skills</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active">Projects</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation_bar