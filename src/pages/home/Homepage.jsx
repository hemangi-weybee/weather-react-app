import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../component/Header';
import CityDetailCard from '../../component/CityDetailCard';
import NewSearchBox from '../../component/NewSearchBox';

const Homepage = () => {
  const [coords, setCoords] = useState(null);
  const recentLocation = useSelector((state) => state.recentLocation);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoords(`${position.coords.latitude},${position.coords.longitude}`);
      });
    }
  }, []);

  return (
    <div className="homepage">
      <div className="home-banner">
        <Header />

        <div className="spad container">
          <div className="search">
            <NewSearchBox />
          </div>

          {navigator.geolocation && coords && (
            <div className="current-wrapper spad">
              <div className="location-heading">Current Location</div>
              <div className="recent-locations">{coords && <CityDetailCard city={coords} />}</div>
            </div>
          )}
          {recentLocation.length ? (
            <div className="recent-wrapper">
              <div className="location-heading">Recent Location</div>
              <div className="recent-locations">
                {recentLocation.map((city, i) => (
                  <CityDetailCard city={city} key={city + i} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
