import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">DevLink Marketplace</div>
      <div className="navbar-right">
        <a href="#">Find Dev</a>
        <a href="#">Find Jobs</a>
        <a href="#">Login</a>
        <a href="#">Create Account</a>
      </div>
    </nav>
  );
}

export default Navbar;
