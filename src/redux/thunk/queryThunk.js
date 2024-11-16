import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { QUERY } from '../../config/constants/api';

//createQuery api start here
const createQuery = createAsyncThunk('service/getall', async (data) => {
    try {
        const {  payload } = data
        console.log("payload",payload);
        
       const response = await Post(QUERY.create , payload   );
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//createQuery api end here

export {
    createQuery 
}