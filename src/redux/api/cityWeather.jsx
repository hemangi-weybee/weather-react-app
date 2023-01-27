import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, key } from './baseQuery';

export const cityWeatherApi = createApi({
  reducerPath: 'cityWeather',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCityWeather: builder.query({
      query: (city) => `current.json?key=${key}&q=${city}&aqi=yes`
    })
  })
});

export const { useGetCityWeatherQuery } = cityWeatherApi;
