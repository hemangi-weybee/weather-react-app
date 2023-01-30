import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ city }) => {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <div>
          <Link to={`/current/${city}`}>Today</Link>
          <Link to={`/current/${city}/daily`}>Daily</Link>
          <Link to={`/current/${city}/hourly`}>Hourly</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
