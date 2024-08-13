// import { createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState: {
//     searchResults: [],
//     favorites: JSON.parse(localStorage.getItem('favorites')) || [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     setSearchResults(state, action) {
//       state.searchResults = action.payload;
//     },
//     addFavorite(state, action) {
//       state.favorites.push(action.payload);
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//     removeFavorite(state, action) {
//       state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
//       localStorage.setItem('favorites', JSON.stringify(state.favorites));
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchMovies.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchMovies.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.searchResults = action.payload;
//       })
//       .addCase(fetchMovies.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setSearchResults, addFavorite, removeFavorite } = moviesSlice.actions;

// export const fetchMovies = (searchQuery) => async dispatch => {
//   try {
//     const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=YOUR_API_KEY`);
//     dispatch(setSearchResults(response.data.Search || []));
//   } catch (error) {
//     console.error(error);
//   }
// };

// export default moviesSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (searchQuery) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=3fbbceaf`);
    return response.data.Search || [];
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    searchResults: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.searchResults = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addFavorite, removeFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;

