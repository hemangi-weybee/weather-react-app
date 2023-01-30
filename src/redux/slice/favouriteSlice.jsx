import { createSlice } from '@reduxjs/toolkit';

const initialState =
  localStorage.getItem('favouriteCity') !== null
    ? JSON.parse(localStorage.getItem('favouriteCity'))
    : [];

export const favouriteSlice = createSlice({
  name: 'favouriteCity',
  initialState,
  reducers: {
    addCity(state, action) {
      const newState = [...state, action.payload];
      localStorage.setItem('favouriteCity', JSON.stringify(newState));
      return newState;
    },
    removeCity(state, action) {
      const newState = state.filter(
        (city) =>
          city.location.name.toLowerCase() !== action.payload.location.name.toLowerCase() &&
          city.location.region.toLowerCase() !== action.payload.location.region.toLowerCase()
      );
      localStorage.setItem('favouriteCity', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addCity, removeCity } = favouriteSlice.actions;
