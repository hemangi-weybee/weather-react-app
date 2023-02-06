import React from 'react';

const WeatherDetailCard = ({ data }) => {
  return (
    <>
      <div className="basic-weather">
        <div className="card-heading">
          <div>Current Weather</div>
          <div>{data.date}</div>
        </div>

        <div className="card-content">
          <div className="temp-wrapper">
            <div className="temperature">
              <img src={data.day.condition.icon}></img>
              <span>{data.day.avgtemp_c}&deg;c</span>
            </div>
            <div className="temperature-feel">
              <div>
                <span className="temp-title">Minimum temperature </span>
                <span className="temp-val">
                  <span>{data.day.mintemp_c}&deg;c</span>
                </span>
              </div>
              <div>
                <span className="temp-title">Maximum temperature </span>
                <span className="temp-val">
                  <span>{data.day.maxtemp_c}&deg;c</span>
                </span>
              </div>
            </div>
          </div>

          <div className="city-details">
            <div className="card-left">
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/note.svg" />
                  Weather
                </div>
                <div className="card-value">{data.day.condition.text}</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/humidity.svg" />
                  Humidity
                </div>
                <div className="card-value">{data.day.avghumidity}%</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/wind.svg" />
                  Wind
                </div>
                <div className="card-value">{data.day.maxwind_kph} km/h</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/rain.svg" />
                  Probability Rain
                </div>
                <div className="card-value">{data.day.daily_chance_of_rain}%</div>
              </div>
            </div>

            <div className="card-right">
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/visibility.svg" />
                  Visibility
                </div>
                <div className="card-value">{data.day.avgvis_km} km</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/uv.svg" />
                  UV
                </div>
                <div className="card-value">{data.day.uv}</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/precipitation.svg" />
                  Precipitation
                </div>
                <div className="card-value">{data.day.totalprecip_in} inch</div>
              </div>
              <div className="card-item">
                <div className="card-title">
                  <img src="/icons/snow.svg" />
                  Probability Snowfall
                </div>
                <div className="card-value">{data.day.daily_chance_of_snow}%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetailCard;
