import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import { removeCity } from '../../redux/slice/favouriteSlice';

const Favourites = () => {
  const favouriteCity = useSelector((state) => state.favouriteCity);
  const dispatch = useDispatch();

  return (
    <div className="fav-page">
      <Header />
      <div className="container">
        <div className="fav-wrapper spad">
          <table className="fav-list">
            <thead>
              <tr>
                <th>City</th>
                <th>State</th>
                <th>Country</th>
                <th>Date</th>
                <th>Tempreature</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {favouriteCity.length ? (
                favouriteCity.map((item) => (
                  <tr key={item.location.name}>
                    <td>{item.location.name}</td>
                    <td>{item.location.region}</td>
                    <td>{item.location.country}</td>
                    <td>{item.location.localtime.split(' ')[0]}</td>
                    <td>{item.current.temp_c}&deg;c</td>
                    <td>
                      <button onClick={() => dispatch(removeCity(item))}>
                        <img src="/icons/remove.svg" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6}>
                    <Errorpage error={'No city found'} />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Favourites;
