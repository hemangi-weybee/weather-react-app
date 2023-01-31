import React from 'react';

const WeatherDetailCard = ({ data }) => {
  return (
    <div className="basic-weather">
      <div className="card-heading">
        <div>Current Weather</div>
        <div>{data.location.localtime}</div>
      </div>

      <div className="card-content">
        <div className="temp-wrapper">
          <div className="tempreture">
            <img src={data.current.condition.icon}></img>
            <span>{data.current.temp_c}&deg;c</span>
          </div>
          <div className="tempreture-feel">
            <span className="temp-title">RealFeel </span>
            <span className="temp-val">
              <span>{data.current.feelslike_c}&deg;c</span>
            </span>
          </div>
        </div>

        <div className="card-title">
          {data.current.condition.text}
          {data.current.is_day === 1 ? ' day' : ''}
        </div>

        <div className="city-details">
          <div className="card-left">
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/wind.svg" /> Wind
              </div>
              <div className="card-value">
                {data.current.wind_dir.toUpperCase()} {data.current.wind_kph} km/h
              </div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/wind-gust.svg" /> Wind Gusts
              </div>
              <div className="card-value">{data.current.gust_kph} km/h</div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/pressure.svg" /> Pressure
              </div>
              <div className="card-value">{data.current.pressure_mb} mb</div>
            </div>
          </div>
          <div className="card-right">
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/humidity.svg" /> Humidity
              </div>
              <div className="card-value">{data.current.humidity}</div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/visibility.svg" /> Visibility
              </div>
              <div className="card-value">{data.current.vis_km} km</div>
            </div>
            <div className="card-item">
              <div className="card-title">
                <img src="/icons/uv.svg" /> UV
              </div>
              <div className="card-value">{data.current.uv}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetailCard;
