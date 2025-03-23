import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice/userSlice'
import  animalSlice from './userSlice/animalSlice'
import  postSlice  from './userSlice/postSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    animal:animalSlice,
    post:postSlice
  },
})