import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Errorpage from './component/Errorpage';
import Citypage from './pages/city/Citypage';
import DailyWeather from './pages/dailyWeather/DailyWeather';
import Favourites from './pages/favourite/Favourites';
import Homepage from './pages/home/Homepage';
import HourlyWeather from './pages/hourlyWeather.jsx/HourlyWeather';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/current/:city" element={<Citypage />} />
        <Route path="/current/:city/daily" element={<DailyWeather />} />
        <Route path="/current/:city/hourly" element={<HourlyWeather />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<Errorpage error={'Page not found'} />} />
      </Routes>
    </Provider>
  );
};

export default App;
