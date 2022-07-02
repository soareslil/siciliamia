import React from 'react';
import logo from "../Assets/logo.png";
import '../App.css';

function Header() {

  return (
    <div className="header">
    <nav className="header-nav">
        <img src={logo} alt="img logo" className="logo"/>
        <div className="home-p">
        <p>Home</p>
        <p>About us</p>
        </div>
    </nav>
    </div>
  );
}

export default Header;