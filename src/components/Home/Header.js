import React from 'react'
import './Header.css'
import Navbar from "../Navbar/Navbar";


const Header = () => {
    return (
      <div className="header-background">
          <Navbar />
        <div className="header">
          <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
          <div className="header__input">
            <input className="input" type="text" placeholder="Search" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    );
}

export default Header
