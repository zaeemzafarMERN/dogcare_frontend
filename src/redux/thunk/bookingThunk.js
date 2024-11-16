import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Put } from '../../config/api/put';
import { Get } from '../../config/api/get';
import { Delete } from '../../config/api/delete';
import { BOOKING } from '../../config/constants/api';


//create Booking api start here
const createBooking = createAsyncThunk('booking/create', async (data) => {

    const { token , payload } = data
    try {
       const response = await Post(BOOKING.create, payload, token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//create Booking api end here

//userBooking api start here
const userBooking = createAsyncThunk('user/bookings', async (data) => {
    const { token} = data
    try {
       const response = await Get(BOOKING.userbooking , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//userBooking api end here

//userBooking api start here
const userBookingbyid = createAsyncThunk('user/booking', async (data) => {
    const { token , id} = data
    try {
       const response = await Get(BOOKING.userbookingByid+id , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//userBooking api end here

//Booking Rating api start here
const bookingRatings = createAsyncThunk('user/bookingrating', async (data) => {
    const { token , id} = data
    try {
       const response = await Get(BOOKING.bookingRating+id , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//Booking Rating api end here

//create Rating on Services api start here
const createRating = createAsyncThunk('user/bookingratings', async (data) => {
    const { token , payload} = data
    try {
       const response = await Post(BOOKING.createReview , payload , token);
       return response?.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//create Rating on Services api end here

//filter user Bookings api start here
const filterBookings = createAsyncThunk('user/filterbooking', async (data) => {
    const { token , payload} = data
    const { status , toDate , fromDate } = payload
    
    try {
       const response = await Get(BOOKING.filterbooking , token , { status , toDate , fromDate}); 
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//filter user Bookings api end here

export {
    createBooking,
    userBooking,
    userBookingbyid,
    bookingRatings,
    createRating,
    filterBookings
}