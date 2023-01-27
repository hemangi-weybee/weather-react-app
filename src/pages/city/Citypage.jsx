import React from 'react';
import { useParams } from 'react-router-dom';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Navbar from '../../component/Navbar';
import { useGetCityWeatherQuery } from '../../redux/api/cityWeather';
import CityModal from './CityModal';

const Citypage = () => {
  const { city } = useParams();
  const { isLoading, isError, data } = useGetCityWeatherQuery(city);

  return (
    <div className="citypage">
      <Header />
      <Navbar city={city} />

      {isLoading ? <Loader /> : isError ? <Errorpage /> : <CityModal data={data} />}
    </div>
  );
};

export default Citypage;
