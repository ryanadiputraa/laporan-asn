import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const toggleNavbar = () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active-navbar');
  }

  const toggleHam = () => {
    const ham = document.querySelectorAll('.ham');
    ham.forEach(h => h.classList.toggle('active-ham'))
  }

  return (
    <div className="navbar">
      <div className="main-link">
        <NavLink className="title" exact to="/">LAPORAN ASN</NavLink>
      </div>
      <div className="hamburger" onClick={() => {
        toggleNavbar();
        toggleHam();
      }}>
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <div className="nav-links">
        <NavLink className="nav-link" to="/about" onClick={() => {
          toggleNavbar();
          toggleHam();
        }}>Tentang</NavLink>
        <NavLink className="nav-link" to="/help" onClick={() => {
          toggleNavbar();
          toggleHam();
        }}>Bantuan</NavLink>
      </div>
    </div>
  )
}

export default Navbar;