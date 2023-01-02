import { createSlice } from '@reduxjs/toolkit'

export const auth = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user : {}
  },
  reducers: {
  
    getuser: (state,payload) => {
    state.user = payload.user;
    state.isAuthenticated = true;


},
  logout:(state) =>{
    state.user = {};
    state.isAuthenticated = false;
  }
},
})

// Action creators are generated for each case reducer function
export const { getuser,logout } = auth.actions

export default auth.reducer