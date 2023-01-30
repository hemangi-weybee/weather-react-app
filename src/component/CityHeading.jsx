import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity, removeCity } from '../redux/slice/favouriteSlice';

const CityHeading = ({ data }) => {
  const ref = useRef();
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
  }, [favouriteCity, data]);

  return (
    <div className="city-heading">
      <h1>{data.location.name.concat(', ').concat(data.location.region)}</h1>

      {isFav ? (
        <div className="follow-wrapper" onClick={() => dispatch(removeCity(data))}>
          <img src={`/icons/followed.svg`} id="follow" ref={ref}></img>
        </div>
      ) : (
        <div
          className="follow-wrapper"
          onMouseEnter={() => (ref.current.src = '/icons/followed.svg')}
          onMouseOut={() => (ref.current.src = '/icons/follow.svg')}
          onClick={() => dispatch(addCity(data))}>
          <img src={`/icons/follow.svg`} id="follow" ref={ref}></img>
        </div>
      )}
    </div>
  );
};

export default CityHeading;
