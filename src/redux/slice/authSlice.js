import { createSlice } from '@reduxjs/toolkit';
import  {  
  loginAuth 
} from "../thunk/authThunk"


 const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: "",
    data: []
    

   
  },
  reducers: {
    addUser: (state, { payload }) => {
      console.log("payload",payload)
      state.userData = payload.user
      state.userToken = payload.token
    },
    updateUserData: (state, { payload }) => {
      state.userData = payload.user.user
    },
    removeUser: (state) => {
      state.userData = {};
      state.userToken = null;
      localStorage.clear();
    
    },
    addData: (state, { payload }) => {
      console.log(payload)
      state[payload.name] = payload.value
    },
    logouts(state) {
      state.data = [];
      state.error = "";
      // Optionally reset other state properties if needed
    },
    emptySomestates(state) {
      state.error = "";
      // Optionally reset other state properties if needed
    },
    // profileData(state) {
    //   state.data.user = {};
    //   // Optionally reset other state properties if needed
    // },
    editProfileData(state , {payload}){
      state.data.user = payload.updateProfile
    },
    removeProfileImage(state , action){
      let { image , ...rest } = action.payload

      let profile = {
        ...rest,
        image : ""
      }
      

     
       state.data.user = profile
    }
  },
  extraReducers(builder) {
     // ----------------------------------- for user login api -----------------------------------------------
     builder.addCase(loginAuth.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loginAuth.fulfilled, (state, action) => {
    
      state.isLoading = false;
      state.data =   action.payload?.data ? action.payload?.data : [] ;
      state.error = !action.payload?.data ? action?.payload : "";
    });
    builder.addCase(loginAuth.rejected, (state, action) => {
    
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user login api -----------------------------------------------

   
  },
})

// Action creators are generated for each case reducer function
export const { logouts  , emptySomestates , editProfileData , removeProfileImage ,addData , removeUser , updateUserData ,addUser} = userSlice.actions

// export default userSlice.reducer

export const UserReducers = userSlice.reducer;