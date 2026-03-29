import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getAllThemes = createAsyncThunk(
  'themes/getAllThemes',
  async (_, thunkAPI) => {
    try {
      const response = await axiosAPI.get('/themes');
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
