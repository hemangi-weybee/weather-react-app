import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBox = () => {
  const navigate = useNavigate();
  const ref = useRef();
  const [errorMsg, setErrorMsg] = useState(null);

  const search = (e) => {
    const letters = /^[A-Za-z]+$/;
    if (ref.current.value.match(letters)) {
      setErrorMsg(null);
    }
    if (e.key === 'Enter' || e.target.id === 'search-btn') {
      if (ref.current.value) {
        if (ref.current.value.match(letters)) {
          navigate(`/current/${ref.current.value.toLowerCase()}`);
        } else {
          setErrorMsg('City name can contain only letters');
        }
      } else {
        setErrorMsg('Please Enter city name');
      }
    }
  };

  return (
    <div className="search-bar-wrapper">
      <div className={`search-bar ${errorMsg ? 'search-bar-error' : ''}`}>
        <input
          name="search"
          type="search"
          placeholder="Weather of City"
          ref={ref}
          className="search-box"
          onKeyDown={search}
        />
        <button className="search-btn" id="search-btn" onClick={search}>
          <img src="/icons/search.svg" id="search-btn" alt="search-icon" className="search-icon" />
        </button>
      </div>
      {errorMsg && <div className="search-error">{errorMsg}</div>}
    </div>
  );
};

export default SearchBox;
