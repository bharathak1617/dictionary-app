// components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-title">Dictionary App</div>
        <div className='navbar-links'>
        <Link to="/" className='navlinks'>Home</Link>
        <Link to="/history" className='navlinks'>History</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
