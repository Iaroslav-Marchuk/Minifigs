import { createSlice } from '@reduxjs/toolkit';
import { getAllMinifigs } from './operations.js';

const handlePending = key => state => {
  state[key].isLoading = true;
  state[key].error = null;
};

const handleRejected = key => (state, action) => {
  state[key].isLoading = false;
  state[key].error = action.payload;
};

const minifigsSlice = createSlice({
  name: 'minifigs',
  initialState: {
    all: {
      minifigs: [],
      //   pagination: {
      //     totalItems: 0,
      //     totalPages: 0,
      //     hasNextPage: false,
      //     hasPreviousPage: false,
      //   },
      isLoading: false,
      error: null,
    },
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllMinifigs.pending, handlePending('all'))
      .addCase(getAllMinifigs.fulfilled, (state, action) => {
        // const { orders, ...pagination } = action.payload;
        const { minifigs } = action.payload;
        state.all.minifigs = minifigs;
        // state.all.pagination = {
        //   totalItems: pagination.totalItems,
        //   totalPages: pagination.totalPages,
        //   hasNextPage: pagination.hasNextPage,
        //   hasPreviousPage: pagination.hasPreviousPage,
        // };
        state.all.isLoading = false;
      })
      .addCase(getAllMinifigs.rejected, handleRejected('all'));
  },
});

export default minifigsSlice.reducer;
