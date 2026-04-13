import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToUserCollection,
  deleteItemFromUserCollection,
  getUserCollection,
} from './operations.js';

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
        state.isLoading = false;
        state.error = null;
        state.collection = action.payload.savedMinifigs;
      })
      .addCase(getUserCollection.rejected, handleRejected)

      .addCase(addItemToUserCollection.pending, handlePending)
      .addCase(addItemToUserCollection.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
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
      .addCase(deleteItemFromUserCollection.rejected, handleRejected);
  },
});

export default collectionSlice.reducer;
