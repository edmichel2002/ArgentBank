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
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.id = action.payload.id;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    }
  },
});

export const { setUserProfileUser, setUserName } = profilSlice.actions;
export default profilSlice.reducer;