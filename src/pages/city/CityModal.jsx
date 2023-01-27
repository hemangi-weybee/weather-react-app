/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, removeCity } from '../../redux/slice/favouriteSlice';

const CityModal = ({ data }) => {
  const ref = useRef();
  console.log(data);
  const dispatch = useDispatch();
  const favouriteCity = useSelector((state) => state.favouriteCity);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(
      favouriteCity.findIndex(
        (city) =>
          city.location.name.toLowerCase() === data.location.name.toLowerCase() &&
          city.location.region.toLowerCase() === data.location.region.toLowerCase()
      ) >= 0
    );
  }, [favouriteCity]);

  const addToFav = () => {
    dispatch(addCity(data));
  };

  const deleteFromFav = () => {
    dispatch(removeCity(data));
  };

  return (
    <div className="container">
      <div className="city-heading">
        <h3>{data.location.name.concat(', ').concat(data.location.region)}</h3>

        {isFav ? (
          <div className="follow-wrapper" onClick={deleteFromFav}>
            <img src={`/icons/followed.svg`} id="follow" ref={ref}></img>
          </div>
        ) : (
          <div className="follow-wrapper" onClick={addToFav}>
            <img src={`/icons/follow.svg`} id="follow" ref={ref}></img>
            <span>Add to favourite</span>
          </div>
        )}
      </div>

      <div className="basic-weather spad">
        <div className="card-heading">
          <div>Current Weather</div>
          <div>{data.location.localtime}</div>
        </div>

        <div className="card-content">
          <div className="temp-wrapper">
            <div className="tempreture">
              <img src={data.current.condition.icon}></img>
              <span>{data.current.temp_c}&deg;</span>
              <sub>c</sub>
            </div>
            <div className="tempreture-feel">
              <span className="temp-title">Feels Like </span>
              <span className="temp-val">
                <span>{data.current.feelslike_c}&deg;</span>
                <sub>c</sub>
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
                <div className="card-title">Wind</div>
                <div className="card-value">
                  {data.current.wind_dir.toUpperCase()} {data.current.wind_kph} km/h
                </div>
              </div>
              <div className="card-item">
                <div className="card-title">Wind Gusts</div>
                <div className="card-value">{data.current.gust_kph} km/h</div>
              </div>
              <div className="card-item">
                <div className="card-title">Pressure</div>
                <div className="card-value">{data.current.pressure_mb} mb</div>
              </div>
            </div>
            <div className="card-right">
              <div className="card-item">
                <div className="card-title">Humidity</div>
                <div className="card-value">{data.current.humidity}</div>
              </div>
              <div className="card-item">
                <div className="card-title">Visibility</div>
                <div className="card-value">{data.current.vis_km} km</div>
              </div>
              <div className="card-item">
                <div className="card-title">UV</div>
                <div className="card-value">{data.current.uv}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityModal;
