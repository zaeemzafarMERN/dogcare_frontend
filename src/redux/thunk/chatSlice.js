import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { Put } from '../../config/api/put';
import { CHAT } from '../../config/constants/api';



// get all users and employees search api start here
const searchEmployeeAndUsers = createAsyncThunk('employee/search', async (data) => {
    try {
        const { text , token  } = data
       const response = await Get(CHAT.search+text , token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// get all users and employees search api end here

// get all users and employees search api start here
const GetAllUsers = createAsyncThunk('employee/user', async (data) => {
    try {
        const {  token  } = data
       const response = await Get(CHAT.getUsers , token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// get all users and employees search api end here


// create group api start here
const createGroup = createAsyncThunk('employee/create', async (data) => {
    try {
        const {  token , payload  } = data
       const response = await Post(CHAT.createGroupChat , payload , token , null , 'multipart');
       console.log("5555",response)
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// create group api end here

// get all groups chattlist api start here
const groupChatlist = createAsyncThunk('group/user', async (data) => {
    try {
        const {  token , id } = data
       const response = await Get(CHAT.groupChatlist+id , token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// get all groups chattlist api end here

// get  group messages  api start here
const groupMessages = createAsyncThunk('groupmessages/user', async (data) => {
    try {
        const {  token , group_Id } = data
       const response = await Get(CHAT.groupMessages+group_Id , token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// get  group messages   api end here

export { searchEmployeeAndUsers , GetAllUsers ,createGroup,groupChatlist,groupMessages }