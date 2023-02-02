import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCityWeatherQuery } from '../../redux/api/cityWeather';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Navbar from '../../component/Navbar';
import CityHeading from '../../component/CityHeading';
import WeatherDetailCard from './WeatherDetailCard';
import { useDispatch } from 'react-redux';
import { addRecentLocation } from '../../redux/slice/recentLocationSlice';
import { useGetDaysWeatherQuery } from '../../redux/api/daysWeather';
import HourChart from './HourChart';
import AstroDetailCard from './AstroDetailCard';

const Citypage = () => {
  const { city } = useParams();
  const result = useGetDaysWeatherQuery({ city: city, day: 1 });
  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(addRecentLocation(result?.data?.location?.name));
    }
  }, [result]);

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
          <WeatherDetailCard data={result.data.forecast.forecastday[0]} />
          <HourChart data={result.data.forecast.forecastday[0].hour} />
          <AstroDetailCard data={result.data.forecast.forecastday[0]} />
        </div>
      )}
    </div>
  );
};

export default Citypage;
