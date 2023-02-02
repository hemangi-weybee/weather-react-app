import React from 'react';
import { useParams } from 'react-router-dom';
import CityHeading from '../../component/CityHeading';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import Loader from '../../component/Loader';
import Navbar from '../../component/Navbar';
import { useGetDaysWeatherQuery } from '../../redux/api/daysWeather';

const HourlyWeather = () => {
  const { city } = useParams();
  const result = useGetDaysWeatherQuery({ city: city, day: 1 });

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

          <h2>{result.data.forecast.forecastday[0].date}</h2>

          {result.data.forecast.forecastday[0].hour
            .filter((data) => new Date(data.time).getHours() >= new Date(Date.now()).getHours())
            .map((data, i) => (
              <div key={i} className="hourly-weather-card">
                <div className="weather-heading">
                  <div className="img-container">
                    <img src={data.condition.icon}></img>
                  </div>
                  <div className="temp">
                    <div className="day-date">
                      <div className="day">{data.time.split(' ')[1]}</div>
                      <div className="card-title">{data.condition.text}</div>
                    </div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/temp.svg"></img>
                    <div>{data.temp_c}&deg;c</div>
                    <div className="item-title">Tempreature</div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/temp-feel.svg"></img>
                    <div>{data.feelslike_c}&deg;c</div>
                    <div className="item-title">RealFeel</div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/humidity.svg"></img>
                    <div>{data.humidity}%</div>
                    <div className="item-title">Humidity</div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/uv.svg"></img>
                    <div>{data.uv}</div>
                    <div className="item-title">UV</div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/visibility.svg"></img>
                    <div>{data.vis_km} km</div>
                    <div className="item-title">Visibility</div>
                  </div>
                  <div className="hourly-item">
                    <img src="/icons/wind.svg"></img>
                    <div>{data.wind_kph} km/h</div>
                    <div className="item-title">Wind</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default HourlyWeather;
