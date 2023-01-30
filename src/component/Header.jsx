import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <div className="container">
      <div className="header-wrapper">
        <Link to={`/`} className="header">
          <img src="/icons/logo.svg" className="logo-icon" alt="Logo" />
          <span className="logo">WatherApp</span>
        </Link>
        <div className="header-right">
          <div className="header-search">
            <SearchBox />
          </div>
          <Link to={`/favourites`} className="header">
            <img src={`/icons/follow.svg`} id="follow"></img>Favorites
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;