import { configureStore } from '@reduxjs/toolkit'
import appReducer from "./appSlice/appSlice"
import usersReducer from './usersSlice/usersSlice'

export const store = configureStore({
    reducer:{
        app: appReducer,
        users: usersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch