import React, { useState } from 'react';

const DailyWeatherCard = ({ data }) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = new Date(data.date);

  const [viewMore, setViewMore] = useState(false);

  console.log(data, 'aa');

  return (
    <div className="daily-weather-card">
      {viewMore === false ? (
        <div className="weather-heading">
          <div className="day-date less-info">
            <div className="day">{days[date.getDay()]}</div>
            <div className="date">
              {date.getDate()} {months[date.getMonth()]}
            </div>
          </div>
          <div className="temp-wrapper">
            <img src={data.day.condition.icon}></img>
            <span>{data.day.avgtemp_c}&deg;c</span>
          </div>
          <div className="weather-condition">{data.day.condition.text}</div>
          <div className="more-detail" onClick={() => setViewMore(!viewMore)}>
            <img src="/icons/moreDetail.svg" alt="View more"></img>
          </div>
        </div>
      ) : (
        <div className="basic-weather daily-detail">
          <div className="card-heading">
            <div className="day-date">
              <div className="day"> {days[date.getDay()]}</div>
              <div className="date">
                {date.getDate()} {months[date.getMonth()]}, {date.getFullYear()}
              </div>
            </div>
            <div className="more-detail" onClick={() => setViewMore(!viewMore)}>
              <img src="/icons/moreDetail.svg" alt="View more"></img>
            </div>
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
                    <img src="/icons/sunrise.svg" />
                    Sunrise
                  </div>
                  <div className="card-value">{data.astro.sunrise}</div>
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
                    <img src="/icons/sunset.svg" />
                    Sunset
                  </div>
                  <div className="card-value">{data.astro.sunset}</div>
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
      )}
    </div>
  );
};

export default DailyWeatherCard;
