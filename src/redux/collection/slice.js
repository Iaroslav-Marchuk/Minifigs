import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToUserCollection,
  clearUserCollection,
  deleteItemFromUserCollection,
  getUserCollection,
} from './operations.js';

import { logoutUser } from '../auth/operations.js';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState: {
    collection: [],
    pagination: {
      totalItems: 0,
      totalPages: 0,
      hasNextPage: false,
      hasPreviousPage: false,
    },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserCollection.pending, handlePending)
      .addCase(getUserCollection.fulfilled, (state, action) => {
        const { savedMinifigs, ...pagination } = action.payload;
        state.collection = savedMinifigs;
        state.pagination = {
          totalItems: pagination.totalItems,
          totalPages: pagination.totalPages,
          hasNextPage: pagination.hasNextPage,
          hasPreviousPage: pagination.hasPreviousPage,
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserCollection.rejected, handleRejected)

      .addCase(addItemToUserCollection.pending, handlePending)
      .addCase(addItemToUserCollection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.collection.push(action.payload);
      })
      .addCase(addItemToUserCollection.rejected, handleRejected)

      .addCase(deleteItemFromUserCollection.pending, handlePending)
      .addCase(deleteItemFromUserCollection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.collection = state.collection.filter(
          minifig => minifig._id !== action.payload
        );
      })
      .addCase(deleteItemFromUserCollection.rejected, handleRejected)

      .addCase(clearUserCollection.pending, handlePending)
      .addCase(clearUserCollection.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.collection = [];
      })
      .addCase(clearUserCollection.rejected, handleRejected)

      .addCase(logoutUser.fulfilled, state => {
        state.collection = [];
        state.pagination = {
          totalItems: 0,
          totalPages: 0,
          hasNextPage: false,
          hasPreviousPage: false,
        };
        state.error = null;
      });
  },
});

export default collectionSlice.reducer;
