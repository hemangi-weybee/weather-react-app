import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const currentLocationApi = createApi({
  reducerPath: 'currentLocation',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://us1.locationiq.com/v1/'
  }),
  endpoints: (builder) => ({
    getCurrentCity: builder.query({
      query: ({ lat, lon }) =>
        `reverse?key=pk.d95cae99e197c8eb2061dc225776dd12&lat=${lat}&lon=${lon}&format=json`
    })
  })
});

export const { useGetCurrentCityQuery } = currentLocationApi;
