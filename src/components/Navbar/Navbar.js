import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active-navbar');
  }

  return (
    <div className="navbar">
      <div className="main-link">
        <NavLink className="title" exact to="/">LAPORAN ASN</NavLink>
      </div>
      <div className="hamburger" onClick={toggleNavbar}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to="/about">Tentang</NavLink>
        <NavLink className="nav-link" to="/help">Bantuan</NavLink>
      </div>
    </div>
  )
}

export default Navbar;