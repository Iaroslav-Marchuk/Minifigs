import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './auth/slice.js';
import minifigsReducer from './minifigs/slice.js';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    minifigs: minifigsReducer,
  },
});
