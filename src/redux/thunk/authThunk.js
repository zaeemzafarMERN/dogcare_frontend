import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { AUTH } from '../../config/constants/api';

// register api start here
const registerAuth = createAsyncThunk('auth/register', async (data) => {
    const {payload} = data
    try {
       const response = await Post(AUTH.register , payload  , null , null , 'multipart' );
       if(response?.response?.data?.status === false ){
        return response?.response?.data
    }else{
        return response?.data
    }
 
    
    } catch (error) {
        console.log(error)
    }
})
//register api end here

// login api start here
const loginAuth = createAsyncThunk('auth/login', async (data) => {
    const {payload} = data
    try {
       const response = await Post(AUTH.login , payload );
       if(response?.response?.data?.status === false ){
        return response?.response?.data
    }else{
        return response?.data
    }
 
    
    } catch (error) {
        console.log(error)
    }
})
//login api end here

// forgetPassword api start here
const forgetPasswordAuth = createAsyncThunk('auth/forgetPassword', async (data) => {
    const {payload} = data
    try {
       const response = await Post(AUTH.emailCode , payload );
       if(response?.response?.data?.status === false ){
        return response?.response?.data
    }else{
        return response?.data
    }
 
    
    } catch (error) {
        console.log(error)
    }
})
//forgetPassword api end here

// verficationCode api start here
const verficationCodeAuth = createAsyncThunk('auth/verifyCode', async (data) => {
const { payload } = data
    try {
       const response = await Post(AUTH.verifyCode , payload );
       if(response?.response?.data?.status === false ){
        return response?.response?.data
    }else{
        return response?.data
    }
 
    
    } catch (error) {
        console.log(error)
    }
})
//verficationCode api end here

// resetPassword api start here
const resetPasswordAuth = createAsyncThunk('auth/resetPassword', async (data) => {
    const { payload } = data
        try {
           const response = await Post(AUTH.resetPassword , payload );
           if(response?.response?.data?.status === false ){
            return response?.response?.data
        }else{
            return response?.data
        }
     
        
        } catch (error) {
            console.log(error)
        }
    })
    //resetPassword api end here




export {
    registerAuth , 
    loginAuth , 
    forgetPasswordAuth ,
    verficationCodeAuth ,
    resetPasswordAuth
}