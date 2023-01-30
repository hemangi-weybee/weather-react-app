import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetCityWeatherQuery } from '../../redux/api/cityWeather';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Navbar from '../../component/Navbar';
import CityHeading from '../../component/CityHeading';
import WeatherDetailCard from './WeatherDetailCard';

const Citypage = () => {
  const { city } = useParams();
  const result = useGetCityWeatherQuery(city);

  return (
    <div className="citypage">
      <Header />
      <Navbar city={city} />

      {result.isLoading ? (
        <Loader />
      ) : result.isError ? (
        <Errorpage error={result.error.data.error.message} />
      ) : (
        <div className="container">
          <CityHeading data={result.data} />
          <WeatherDetailCard data={result.data} />
        </div>
      )}
    </div>
  );
};

export default Citypage;
