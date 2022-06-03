import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {authApi} from "../services/AuthService";
import userReducer from '../redux/reducers/userSlice'

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    userReducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(authApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']