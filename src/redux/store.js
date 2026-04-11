import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/slice.js';
import collectionReducer from './collection/slice.js';
import minifigsReducer from './minifigs/slice.js';
import themesReducer from './themes/slice.js';
import wishListReducer from './wishList/slice.js';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    minifigs: minifigsReducer,
    themes: themesReducer,
    collection: collectionReducer,
    wishList: wishListReducer,
  },
});
