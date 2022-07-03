import React from 'react';
import logo from "../Assets/logo.png";
import '../App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';

function Footer() {

    return (
        <nav className="footer-nav">
            <img src={logo} alt="img logo" className="logo-footer"/>
            <div className="socialMedia">
                <p>Follow us</p>
            <div className="links">
            <a href="https://www.linkedin.com/company/siciliamia/" target="blank"><LinkedInIcon/></a>
            <a href="http://www.siciliamia.com//" target="blank"><WebIcon /></a>
            </div>
            </div>
        </nav>
    )
}

export default Footer;