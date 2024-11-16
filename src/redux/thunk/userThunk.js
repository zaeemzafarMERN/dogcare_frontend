import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Put } from '../../config/api/put';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { USER } from '../../config/constants/api';

//userProfile api start here
const userProfile = createAsyncThunk('user/profile', async (data) => {
    const { token } = data
    try {
       const response = await Get(USER.userProfile , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//userProfile api end here


//editProfile api start here
const editProfile = createAsyncThunk('user/editProfile', async (data) => {
    const { token  , payload} = data
    try {
       const response = await Put(USER.updateProfile   , token , payload , null , 'multipart');
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//editProfile api end here

//changePassword api start here
const changePassword = createAsyncThunk('user/changePassword', async (data) => {
    const { token  , payload} = data 
    try {
        const response = await Put(USER.changePassword   , token , payload);
        if(response){
            return response
        }
    } catch (error) {
        if(!error.response.data.status){
          return  error.response.data
        }
    }
});
//changePassword api end here



export {
    userProfile,
    editProfile,
    changePassword,
 

}