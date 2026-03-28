import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getAllMinifigs = createAsyncThunk(
  'minifigs/getAllMinifigs',
  async (
    {
      page = 1,
      perPage = 20,
      // sortBy = 'createdAt',
      // sortOrder = 'desc',
      // filter = {},
    } = {},
    thunkAPI
  ) => {
    try {
      const response = await axiosAPI.get('/minifigs', {
        // params: { page, perPage, sortBy, sortOrder, ...filter },
        params: { page, perPage },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getMinifigById = createAsyncThunk(
  'minifigs/getMinifigById',
  async (minifigId, thunkAPI) => {
    try {
      const response = await axiosAPI.get(`/minifigs/${minifigId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
