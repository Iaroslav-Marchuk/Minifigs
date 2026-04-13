import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosAPI from '../../services/api.js';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (values, thunkAPI) => {
    try {
      await axiosAPI.post('/auth/register', values);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (values, thunkAPI) => {
    try {
      const response = await axiosAPI.post('/auth/login', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axiosAPI.post('/auth/logout');
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const refreshSession = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const response = await axiosAPI.post('/auth/refresh');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const requestResetToken = createAsyncThunk(
  'auth/requestResetToken',
  async (values, thunkAPI) => {
    try {
      await axiosAPI.post('/auth/request-reset-email', values);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const resetUserPassword = createAsyncThunk(
  'auth/resetUserPassword',
  async (values, thunkAPI) => {
    try {
      await axiosAPI.post('/auth/reset-password', values);
      return;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const changePassword = createAsyncThunk(
  'auth/changePassword',
  async (values, thunkAPI) => {
    try {
      const response = await axiosAPI.patch('/auth/change-password', values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
