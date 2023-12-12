import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  make: '',
  maxPrice: null,
  minMileage: null,
  maxMileage: null,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters(state, action) {
      // state.filters = action.payload;
      state.make = action.payload.make;
      state.maxPrice = action.payload.maxPrice;
      state.minMileage = action.payload.minMileage;
      state.maxMileage = action.payload.maxMileage;
    },
    // clearFilter: () => {
    //   return initialState;
    // },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
