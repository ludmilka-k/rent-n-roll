import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://6544c4cb5a0b4b04436cf141.mockapi.io',
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  }
})


