import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cityWeatherApi } from './api/cityWeather';
import { favouriteSlice } from './slice/favouriteSlice';

const reducer = {
  [cityWeatherApi.reducerPath]: cityWeatherApi.reducer,
  [favouriteSlice.name]: favouriteSlice.reducer
};

const customMiddleware = [cityWeatherApi.middleware];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, ...customMiddleware)
});
