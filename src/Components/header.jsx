import React from 'react';
import logo from "../Assets/logo.png";
import '../App.css';

function Header() {

  return (
    <div className="header">
        <img src={logo} alt="img logo" className="logo"/>
    <nav className="header-nav">
        <p>Home</p>
        <p>About us</p>
    </nav>
    </div>
  );
}

export default Header;