import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const getUserWishList = createAsyncThunk(
  'user/getUserWishList',
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
      const response = await axiosAPI.get('/user/mywishlist', {
        params: { page, perPage, theme: themeId, search, sortOrder, sortBy },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addItemToUserWishList = createAsyncThunk(
  'user/addItemToUserWishList',
  async (minifigId, thunkAPI) => {
    try {
      const response = await axiosAPI.post(`/user/mywishlist/${minifigId}`);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const deleteItemFromUserWishList = createAsyncThunk(
  'user/deleteItemFromUserWishList',
  async (minifigId, thunkAPI) => {
    try {
      await axiosAPI.delete(`/user/mywishlist/${minifigId}`);
      return minifigId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const clearUserWishList = createAsyncThunk(
  'user/clearWishList',
  async (_, thunkAPI) => {
    try {
      const response = await axiosAPI.delete('/user/mywishlist/clear');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
