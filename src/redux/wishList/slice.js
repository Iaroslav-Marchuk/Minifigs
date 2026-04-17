import { createSlice } from '@reduxjs/toolkit';
import {
  addItemToUserWishList,
  clearUserWishList,
  deleteItemFromUserWishList,
  getUserWishList,
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

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    wishList: [],
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
      .addCase(getUserWishList.pending, handlePending)
      .addCase(getUserWishList.fulfilled, (state, action) => {
        const { wishList, ...pagination } = action.payload;
        state.wishList = wishList;
        state.pagination = {
          totalItems: pagination.totalItems,
          totalPages: pagination.totalPages,
          hasNextPage: pagination.hasNextPage,
          hasPreviousPage: pagination.hasPreviousPage,
        };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserWishList.rejected, handleRejected)

      .addCase(addItemToUserWishList.pending, handlePending)
      .addCase(addItemToUserWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wishList.push(action.payload);
      })
      .addCase(addItemToUserWishList.rejected, handleRejected)

      .addCase(deleteItemFromUserWishList.pending, handlePending)
      .addCase(deleteItemFromUserWishList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.wishList = state.wishList.filter(
          minifig => minifig._id !== action.payload
        );
      })
      .addCase(deleteItemFromUserWishList.rejected, handleRejected)

      .addCase(clearUserWishList.pending, handlePending)
      .addCase(clearUserWishList.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
        state.wishList = [];
      })
      .addCase(clearUserWishList.rejected, handleRejected)

      .addCase(logoutUser.fulfilled, state => {
        state.wishList = [];
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

export default wishListSlice.reducer;
