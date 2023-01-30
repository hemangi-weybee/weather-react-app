import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cityWeatherApi } from './api/cityWeather';
import { currentLocationApi } from './api/currentLocation';
import { daysWeatherApi } from './api/daysWeather';
import { favouriteSlice } from './slice/favouriteSlice';

const reducer = {
  [cityWeatherApi.reducerPath]: cityWeatherApi.reducer,
  [daysWeatherApi.reducerPath]: daysWeatherApi.reducer,
  [currentLocationApi.reducerPath]: currentLocationApi.reducer,
  [favouriteSlice.name]: favouriteSlice.reducer
};

const customMiddleware = [
  cityWeatherApi.middleware,
  daysWeatherApi.middleware,
  currentLocationApi.middleware
];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, ...customMiddleware)
});
