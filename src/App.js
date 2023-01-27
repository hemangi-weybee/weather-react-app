import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Citypage from './pages/city/Citypage';
import Homepage from './pages/home/Homepage';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:city" element={<Citypage />} />
      </Routes>
    </Provider>
  );
};

export default App;
