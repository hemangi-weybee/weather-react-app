import { createSlice } from '@reduxjs/toolkit';

const initialState =
  localStorage.getItem('recentLocation') !== null
    ? JSON.parse(localStorage.getItem('recentLocation'))
    : [];

export const recentLocationSlice = createSlice({
  name: 'recentLocation',
  initialState,
  reducers: {
    addRecentLocation(state, action) {
      let newState = [
        ...state.filter((city) => city.toLowerCase() !== action.payload.toLowerCase())
      ];
      if (newState.length >= 3) {
        newState = [action.payload, ...newState.slice(0, newState.length - 1)];
      } else {
        newState = [action.payload, ...newState];
      }
      localStorage.setItem('recentLocation', JSON.stringify(newState));
      return newState;
    }
  }
});

export const { addRecentLocation } = recentLocationSlice.actions;
