import React, { useState } from 'react';
import '../css/Navigation_bar.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Navigation_bar = () => {
  const [navActive, setNavActive] = useState(false);
  const navigate = useNavigate();

  const handleBurgerClick = () => {
    setNavActive(!navActive);
  };

  const handleLinkClick = () => {
    setNavActive(false);
  };

  const handleBrandClick = () => {
    navigate('/');
    setNavActive(false); // Optional: close nav if mobile
  };

  return (
    <nav className="navbar">
      <div className={`burger ${navActive ? 'toggle' : ''}`} onClick={handleBurgerClick}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="navbar-brand" onClick={handleBrandClick} style={{ cursor: 'pointer' }}>
        Portfolio
      </div>
      <ul className={`nav-links ${navActive ? 'nav-active' : ''}`}>
        <li><NavLink exact="true" to="/" activeclassname="active" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={handleLinkClick}>About</NavLink></li>
        <li><NavLink to="/education" activeclassname="active" onClick={handleLinkClick}>Education</NavLink></li>
        <li><NavLink to="/skills" activeclassname="active" onClick={handleLinkClick}>Skills</NavLink></li>
        <li><NavLink to="/projects" activeclassname="active" onClick={handleLinkClick}>Projects</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={handleLinkClick}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation_bar;
