import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice/appSlice"
import usersReducer from './usersSlice/usersSlice'

export const store = configureStore({
    reducer:{
        app: appReducer,
        users: usersReducer,
    }
})