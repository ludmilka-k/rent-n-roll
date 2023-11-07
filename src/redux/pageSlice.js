import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const  pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage(state, action) {
      return action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
