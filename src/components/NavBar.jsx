import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'

function NavBar() {
  return (
    <div className="nav-bar">
      <nav className="container mx-auto">
        <div>
          <h1>
            Philip <span>Samoei</span>
          </h1>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about-me">About Me</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
