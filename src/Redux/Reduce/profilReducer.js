import { createSlice } from '@reduxjs/toolkit';

const profilSlice = createSlice({
  name: 'profil',
  initialState: {
    email: '',
    firstName: '',
    lastName: '',
    userName: '',
  },
  reducers: {
    setUserProfileUser: (state, action) => {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName;
    },
  },
});

export const { setUserProfileUser } = profilSlice.actions;
export default profilSlice.reducer;
