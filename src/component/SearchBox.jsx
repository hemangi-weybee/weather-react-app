import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const ref = useRef();

  const search = () => {
    console.log(ref.current.value);
    navigate(`/${ref.current.value.toLowerCase()}`);
  };

  return (
    <div className="search-bar">
      <img src="/icons/search.svg" alt="search-icon" className="search-icon" />
      <input
        name="search"
        type="search"
        placeholder="Search by City"
        ref={ref}
        className="search-box"
      />
      <button className="search-btn" onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchBox;
