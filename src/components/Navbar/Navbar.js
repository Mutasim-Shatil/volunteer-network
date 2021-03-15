import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../logos/navbar-logo.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
          <div className="navbar__logo">
            <img src={logo} alt="VOLUNTEER NETWORK" />
          </div>
          <div className="navbar__details">
            <Link className="details">Home</Link>
            <Link className="details">Donation</Link>
            <Link className="details">Events</Link>
            <Link className="details">Blog</Link>
            <Link className="details">Register</Link>
            <Link className="details">Admin</Link>
          </div>
        </div>
    );
}

export default Navbar
