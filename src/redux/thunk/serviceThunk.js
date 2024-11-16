import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { SERVICES } from '../../config/constants/api';

//get all services api start here
const GetAllServices = createAsyncThunk('service/getall', async (data) => {
    try {
       const response = await Get(SERVICES.getAllServices );
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//get all services api end here

//get all services api start here
const GetOneServices = createAsyncThunk('service/getone', async (data) => {
    const { token , id } = data
    try {
       const response = await Get(SERVICES.getbyId+id , token );
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//get all services api end here



export {
    GetAllServices ,
    GetOneServices
}