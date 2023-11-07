import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../constants';
const per_page = 12;
export const fetchCarsThunk = createAsyncThunk (
  "cars/fetchAll",
  async (page, thunkAPI) => {
    try {
      const url = new URL(`${BASE_URL}/adverts`);
      url.searchParams.append("p", page);
      url.searchParams.append("limit", per_page);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
