import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsByPageThunk } from './operations';

const initialState = {
  // items: [],
  filterCars: [],
  isLoading: false,
  error: null,
  endOfCollection: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearEndOfCollection(state) {
      state.endOfCollection = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCarsByPageThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.endOfCollection = false;
      })
      .addCase(fetchCarsByPageThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        if (action.payload.length < 12) {
          state.endOfCollection = true;
        } else {
          state.endOfCollection = false;
        }

        // state.items = [...state.items, ...action.payload];

      })
      .addCase(fetchCarsByPageThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.endOfCollection = false;
      })
});

export const { clearEndOfCollection } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
