import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Errorpage from '../../component/Errorpage';
import Header from '../../component/Header';
import { removeCity } from '../../redux/slice/favouriteSlice';

const Favourites = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  const favouriteCity = useSelector((state) => state.favouriteCity);
  const [filteredData, setFilteredData] = useState(favouriteCity);

  const search = () => {
    if (ref.current.value !== '') {
      setFilteredData(
        favouriteCity.filter((city) =>
          city?.location?.name.toLowerCase().includes(ref.current.value)
        )
      );
    } else {
      setFilteredData(favouriteCity);
    }
  };

  useEffect(() => {
    search();
  }, [favouriteCity]);

  return (
    <div className="fav-page">
      <Header />
      <div className="container">
        <div className="search-bar-wrapper spad">
          <div className={`search-bar`}>
            <input
              name="search"
              type="text"
              placeholder="Search your City"
              className="search-box"
              onKeyUp={search}
              ref={ref}
            />
            <button className="search-btn" id="search-btn" onClick={search}>
              <img
                src="/icons/search.svg"
                id="search-btn"
                alt="search-icon"
                className="search-icon"
              />
            </button>
          </div>
        </div>
        <div className="fav-wrapper">
          <table className="fav-list">
            <thead>
              <tr>
                <th>
                  <img src="icons/location.svg" alt="Location" />
                  <div>Location</div>
                </th>
                <th>
                  <img src="icons/calendar.svg" alt="Saved on" />
                  <div>Saved on</div>
                </th>
                <th>
                  <img src="icons/temp.svg" alt="Temperature" />
                  <div>Temperature</div>
                </th>
                <th>
                  <img src="icons/wind.svg" alt="Wind" />
                  <div>Wind</div>
                </th>
                <th>
                  <img src="icons/pressure.svg" alt="Pressure" />
                  <div>Pressure</div>
                </th>
                <th>
                  <img src="icons/humidity.svg" alt="Humidity" />
                  <div>Humidity</div>
                </th>
                <th>
                  <img src="icons/visibility.svg" alt="Visibility" />
                  <div>Visibility</div>
                </th>
                <th>
                  <img src="icons/uv.svg" alt="UV" />
                  <div>UV</div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length ? (
                filteredData.map((item) => (
                  <tr key={item.location.name}>
                    <td>
                      {item.location.name}, {item.location.country}
                    </td>
                    <td>{item.location.localtime.split(' ')[0]}</td>
                    <td>{item.current.temp_c}&deg;c</td>
                    <td>{item.current.wind_kph} km/h</td>
                    <td>{item.current.pressure_mb} mb</td>
                    <td>{item.current.humidity}%</td>
                    <td>{item.current.vis_km} km</td>
                    <td>{item.current.uv}</td>
                    <td>
                      <button onClick={() => dispatch(removeCity(item))}>
                        <img src="/icons/remove.svg" alt="Delete" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={9}>
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
