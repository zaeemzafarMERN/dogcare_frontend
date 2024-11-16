import { createSlice } from '@reduxjs/toolkit';

 const petSlice = createSlice({
  name: 'pet',
  initialState: {
    isLoading: false,
    error: "",
    petdata: []
    

   
  },
  reducers: {
    addPetData : (state ,{payload})=>{
        console.log(state , "payload",payload)
         state.petdata =   [ ...state.petdata , payload]
    },
    removePetData: (state) => {
        state.petdata = []
      },
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
  
})

// Action creators are generated for each case reducer function
export const { logouts  , emptySomestates , editProfileData , removeProfileImage ,addData , removeUser , updateUserData ,addUser , addPetData , removePetData} = petSlice.actions

// export default userSlice.reducer

export const PetReducers = petSlice.reducer;