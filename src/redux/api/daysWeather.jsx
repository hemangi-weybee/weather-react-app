import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, key } from './baseQuery';

export const daysWeatherApi = createApi({
  reducerPath: 'dailyWeather',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getDaysWeather: builder.query({
      query: ({ city, day }) => `forecast.json?key=${key}&q=${city}&days=${day}&aqi=yes&alerts=no`
    })
  })
});

export const { useGetDaysWeatherQuery } = daysWeatherApi;
