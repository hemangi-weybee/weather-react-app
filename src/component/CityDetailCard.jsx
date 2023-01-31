import React from 'react';
import { Link } from 'react-router-dom';
import { ShimmerThumbnail } from 'react-shimmer-effects';
import { useGetCityWeatherQuery } from '../redux/api/cityWeather';
import Errorpage from './Errorpage';

const CityDetailCard = ({ city }) => {
  const result = useGetCityWeatherQuery(city);

  return result.isLoading ? (
    <ShimmerThumbnail height={150} width={200} rounded />
  ) : result.isError ? (
    <Errorpage />
  ) : (
    <Link to={`current/${result.data.location.name}`}>
      <div className="current-city-card">
        <div className="city-name">{result.data.location.name}</div>
        <div className="country-name">{result.data.location.country}</div>
        <div className="temp">
          <img src={result.data.current.condition.icon}></img>
          <div>
            <span>{result.data.current.temp_c}&deg;</span>c
          </div>
        </div>
        <div className="real-temp">
          RealFeel <span>{result.data.current.temp_c}&deg;</span>c
        </div>
      </div>
    </Link>
  );
};

export default CityDetailCard;
