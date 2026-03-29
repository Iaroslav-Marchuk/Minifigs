import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './auth/slice.js';
import minifigsReducer from './minifigs/slice.js';
import themesReducer from './themes/slice.js';

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    minifigs: minifigsReducer,
    themes: themesReducer,
  },
});
