import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getAllMinifigs = createAsyncThunk(
  'minifigs/getAllMinifigs',
  async (
    // {
    //   page = 1,
    //   perPage = 10,
    //   sortBy = 'createdAt',
    //   sortOrder = 'desc',
    //   filter = {},
    // } = {},
    thunkAPI
  ) => {
    try {
      const response = await axiosAPI.get('/minifigs', {
        // params: { page, perPage, sortBy, sortOrder, ...filter },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
