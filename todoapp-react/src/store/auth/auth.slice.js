import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isFetching: false,
    error: null,
    user: null,
    accessToken: null,
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload.accessToken;
    }
  }
})

export const { setAccessToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
