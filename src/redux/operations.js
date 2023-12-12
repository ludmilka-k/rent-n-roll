import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';

const per_page = 12;
export const fetchCarsByPageThunk = createAsyncThunk(
  'cars/fetchAll',
  async ({page, make, signal}, thunkAPI) => {
    try {
      const url = new URL(`${BASE_URL}/adverts`);
      if (make !== undefined && make !== '') {
        url.searchParams.append('make', make);
      }

      url.searchParams.append('page', page);
      url.searchParams.append('limit', per_page);
      const response = await axios.get(url, {signal: signal});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const fetchAllMakesThunk = createAsyncThunk(
  'makes/fetchAll',
  async (_, thunkAPI) => {
    try {
      const url = new URL(`${BASE_URL}/makes`);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
