import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getUserCollection = createAsyncThunk(
  'user/getUserCollection',
  async (
    {
      page = 1,
      perPage = 40,
      themeId,
      search,
      sortOrder = 'asc',
      sortBy = 'fig_num',
    } = {},
    thunkAPI
  ) => {
    try {
      const response = await axiosAPI.get('/user/mycollection', {
        params: { page, perPage, theme: themeId, search, sortOrder, sortBy },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addItemToUserCollection = createAsyncThunk(
  'user/addItemToUserCollection',
  async (minifigId, thunkAPI) => {
    try {
      await axiosAPI.post(`/user/mycollection/${minifigId}`);
      return minifigId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteItemFromUserCollection = createAsyncThunk(
  'user/deleteItemFromUserCollection',
  async (minifigId, thunkAPI) => {
    try {
      await axiosAPI.delete(`/user/mycollection/${minifigId}`);
      return minifigId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
