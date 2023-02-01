import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL, key } from './baseQuery';

export const searchCityApi = createApi({
  reducerPath: 'searchCity',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    searchCity: builder.query({
      query: (city) => `search.json?key=${key}&q=${city}`,
      transformResponse: (response) =>
        response.map((city) => ({ label: city.name, value: city.name.toLowerCase() }))
    })
  })
});

export const { useSearchCityQuery } = searchCityApi;
