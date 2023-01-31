import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ city }) => {
  return (
    <nav className="navbar container">
      <Link to={`/current/${city}`}>
        <span>Today</span>
      </Link>
      <Link to={`/current/${city}/daily`}>
        <span>Daily</span>
      </Link>
      <Link to={`/current/${city}/hourly`}>
        <span>Hourly</span>
      </Link>
      <div className="filler"></div>
    </nav>
  );
};

export default Navbar;
