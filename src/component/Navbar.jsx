import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ city }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/${city}`}>Today</NavLink>
        {/* <NavLink to={`/${city}/hourly`}>Hourly</NavLink> */}
        <NavLink to={`/${city}/daily`}>Daily</NavLink>
        <NavLink to={`/favorites`}>Favorites</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
