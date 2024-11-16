import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {UserReducers} from './slice/authSlice'
import {PetReducers } from './slice/petSlice'

const rootReducer = combineReducers({
  user: UserReducers,
  pet : PetReducers
})

const persistConfig = {
  key: 'dogdaycare_web',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)