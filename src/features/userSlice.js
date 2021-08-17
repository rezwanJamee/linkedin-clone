import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
      user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

//Selector
export const selectUser = (state) => state.user.value;

export default userSlice.reducer;
