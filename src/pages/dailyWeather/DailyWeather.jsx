import React from 'react';
import { useParams } from 'react-router-dom';
import CityHeading from '../../component/CityHeading';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Navbar from '../../component/Navbar';
import { useGetDaysWeatherQuery } from '../../redux/api/daysWeather';
import DailyWeatherCard from './DailyWeatherCard';

const DailyWeather = () => {
  const { city } = useParams();
  const result = useGetDaysWeatherQuery({ city: city, day: 5 });

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

          <h4>
            {result.data.forecast.forecastday[0].date
              .concat(' to ')
              .concat(
                result.data.forecast.forecastday[result.data.forecast.forecastday.length - 1].date
              )}
          </h4>

          {result.data.forecast.forecastday.map((item) => (
            <DailyWeatherCard data={item} key={item.date} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DailyWeather;
