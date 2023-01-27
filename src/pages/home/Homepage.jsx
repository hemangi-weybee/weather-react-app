import React, { useEffect, useState } from 'react';
import CurrentCityCard from '../../component/CurrentCityCard';
import Header from '../../component/Header';
import SearchBox from '../../component/SearchBox';

const Homepage = () => {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        setCoords({ latitude: position.coords.latitude, longitude: position.coords.longitude });
      });
    }
  }, []);

  return (
    <div className="homepage">
      <div className="home-banner">
        <Header />

        <div className="spad container">
          <div className="search">
            <SearchBox />
          </div>

          {navigator.geolocation && (
            <div className="recent-wrapper">
              <h5>Recent Locations</h5>
              <div className="recent-locations">
                <CurrentCityCard data={coords} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
