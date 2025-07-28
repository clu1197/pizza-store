import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'Cici',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload.name;
    },
  },
});

export const { updateName } = userSlice.actions;
export default userSlice.reducer;
