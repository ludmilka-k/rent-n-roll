import { createSlice } from '@reduxjs/toolkit';
import { fetchCarsThunk } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  showLoadMore: true,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCarsThunk.pending, state => {
        state.isLoading = true;
        state.showLoadMore = false;
      })
      .addCase(fetchCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.showLoadMore = true;

        if (action.payload.length < 12 || action.payload.length === 0) {
          state.showLoadMore = false;
        }

        state.items = [...state.items, ...action.payload];

      })
      .addCase(fetchCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.showLoadMore = false;
      })
});

export const carsReducer = carsSlice.reducer;
