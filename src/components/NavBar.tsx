import React, { useState } from 'react';
import './Navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faInfoCircle, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
// import potential from './src/components/Images/Ebube.png';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
      
    const toggleNavbar = () => {
        setIsOpen(!isOpen); 
    };

    return (
  
        <nav className="navbar">
           
            
            <div className="navbar-logo">
                 <img src={'../Public/Images/ebubedike.png'} alt='Brand Logo' />
        
            </div>
            

            <div className="navbar-toggle" onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                
            <a href="#">
                    <i className="bi bi-house-door-fill"></i> Home</a>
                <a href="#">
                <i className="bi bi-info-circle-fill"></i>About</a>
                <a href="#">
                <i className="bi bi-gear-fill"></i>Settings</a>
                <a href="#">
                <i className="bi bi-envelope-fill"></i>Services</a>
                
            </div>
        </nav>
        
    );
};

export default NavBar;