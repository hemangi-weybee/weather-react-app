import React, { useEffect, useState } from 'react';
import { ShimmerThumbnail } from 'react-shimmer-effects';
import Header from '../../component/Header';
import SearchBox from '../../component/SearchBox';
import CityDetailCard from '../../component/CityDetailCard';
import { useGetCurrentCityQuery } from '../../redux/api/currentLocation';
import Errorpage from '../../component/Errorpage';

const Homepage = () => {
  const [coords, setCoords] = useState(null);
  const result = useGetCurrentCityQuery(coords);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setCoords({ lat: position.coords.latitude, lon: position.coords.longitude });
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
            <div className="recent-wrapper spad">
              <h5>Current Location</h5>
              <div className="recent-locations">
                {result && result.isLoading ? (
                  <ShimmerThumbnail height={150} width={200} rounded />
                ) : result && result.isError ? (
                  <Errorpage />
                ) : (
                  <CityDetailCard city={result.data.address.city.toLowerCase()} />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
