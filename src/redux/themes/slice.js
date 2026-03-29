import { createSlice } from '@reduxjs/toolkit';
import { getAllThemes } from './operations.js';

const themesSlice = createSlice({
  name: 'themes',
  initialState: {
    themes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllThemes.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllThemes.fulfilled, (state, action) => {
        state.themes = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllThemes.rejected, (state, action) => {
        ((state.isLoading = false), (state.error = action.payload));
      });
  },
});

export default themesSlice.reducer;
