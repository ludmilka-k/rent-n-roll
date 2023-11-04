import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL= 'https://6544c4cb5a0b4b04436cf141.mockapi.io'

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/adverts`)
      const adverts = response.data;
      console.log(adverts);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)




// const getCarsWithPagination = (page = 1) =>  baseURL.get(`/adverts?page=${page}&limit=12`);
// const response = await getCarsWithPagination(page);
