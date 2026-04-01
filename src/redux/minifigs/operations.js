import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getAllMinifigs = createAsyncThunk(
  'minifigs/getAllMinifigs',
  async (
    {
      page = 1,
      perPage = 20,
      themeId,
      search,
      sortOrder = 'asc',
      sortBy = 'fig_num',
    } = {},
    thunkAPI
  ) => {
    try {
      const response = await axiosAPI.get('/minifigs', {
        params: { page, perPage, theme: themeId, search, sortOrder, sortBy },
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

export const getSetsByFigNum = createAsyncThunk(
  'minifigs/getSetsByFigNum',
  async (minifigId, thunkAPI) => {
    try {
      const response = await axiosAPI.get(`/minifigs/${minifigId}/sets`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
