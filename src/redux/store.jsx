import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { cityWeatherApi } from './api/cityWeather';
import { daysWeatherApi } from './api/daysWeather';
import { searchCityApi } from './api/searchCity';
import { favouriteSlice } from './slice/favouriteSlice';
import { recentLocationSlice } from './slice/recentLocationSlice';

const reducer = {
  [cityWeatherApi.reducerPath]: cityWeatherApi.reducer,
  [daysWeatherApi.reducerPath]: daysWeatherApi.reducer,
  [searchCityApi.reducerPath]: searchCityApi.reducer,
  [favouriteSlice.name]: favouriteSlice.reducer,
  [recentLocationSlice.name]: recentLocationSlice.reducer
};

const customMiddleware = [
  cityWeatherApi.middleware,
  daysWeatherApi.middleware,
  searchCityApi.middleware
];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...customMiddleware)
});
