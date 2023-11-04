import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export  const { addFavorites, removeFavorites  } = favoritesSlice.actions;

// export default favoritesSlice.reducer;
export const favoritesReducer =  favoritesSlice.reducer;
