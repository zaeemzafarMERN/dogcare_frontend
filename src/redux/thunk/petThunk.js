import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Put } from '../../config/api/put';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { PETS } from '../../config/constants/api';

//getAllPets api start here
const getAllPets = createAsyncThunk('pet/allPets', async (data) => {
    const { token } = data
    try {
       const response = await Get(PETS.getAllPetsForUser , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//getAllPets api end here

//getOnePets api start here
const getOnePets = createAsyncThunk('pet/getOnePet', async (data) => {
    const { token , id } = data
    try {
       const response = await Get(PETS.getOnePet+id , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//getOnePets api end here

// createPet profile api start here
const createPet = createAsyncThunk('pet/create', async (data) => {
    const { token  , payload } = data
    console.log("payload",payload,"token",token);
    
    try {
       const response = await Post(PETS.createPet ,payload, token , null , 'multipart');
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
// createPet profile api end here




export {
    getAllPets,
    getOnePets,
    createPet
}