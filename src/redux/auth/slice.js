import { createSlice } from '@reduxjs/toolkit';
import {
  changeName,
  changePassword,
  getGoogleOAuthUrl,
  loginUser,
  loginWithGoogle,
  logoutUser,
  refreshSession,
  registerUser,
} from './operations.js';

const handlePending = state => {
  state.isUserLoading = true;
  state.authError = null;
};

const handleRejected = (state, action) => {
  state.isUserLoading = false;
  state.authError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    accessToken: null,
    isLoggedIn: false,
    isUserLoading: false,
    isRefreshing: true,
    authError: null,
  },

  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearUser: state => {
      state.user = { name: null, email: null };
      state.accessToken = null;
      state.isLoggedIn = false;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, state => {
        state.isUserLoading = false;
      })
      .addCase(registerUser.rejected, handleRejected)

      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.data.accessToken;
        state.user = action.payload.data.user;
      })
      .addCase(loginUser.rejected, handleRejected)

      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, state => {
        state.isUserLoading = false;
        state.isLoggedIn = false;
        state.accessToken = null;
        state.user = { name: null, email: null };
      })
      .addCase(logoutUser.rejected, handleRejected)

      .addCase(refreshSession.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(refreshSession.rejected, state => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
      })

      .addCase(changePassword.pending, handlePending)
      .addCase(changePassword.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.accessToken = action.payload.data.accessToken;
        state.user = action.payload.data.user;
        state.authError = null;
      })
      .addCase(changePassword.rejected, handleRejected)

      .addCase(changeName.pending, handlePending)
      .addCase(changeName.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.user = action.payload.data.user;
        state.authError = null;
      })
      .addCase(changeName.rejected, handleRejected)

      .addCase(getGoogleOAuthUrl.pending, handlePending)
      .addCase(getGoogleOAuthUrl.fulfilled, state => {
        state.isUserLoading = false;
      })
      .addCase(getGoogleOAuthUrl.rejected, handleRejected)

      .addCase(loginWithGoogle.pending, handlePending)
      .addCase(loginWithGoogle.fulfilled, (state, action) => {
        state.isUserLoading = false;
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.user = action.payload.user;
      })
      .addCase(loginWithGoogle.rejected, handleRejected);
  },
});

export const { setAccessToken, clearUser } = authSlice.actions;
export default authSlice.reducer;
