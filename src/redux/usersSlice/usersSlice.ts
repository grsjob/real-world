import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IUser} from "../../models/redux/users";
import AuthService from "../../services/AuthService";
import {AxiosResponse} from "axios";

const initialState = {
    users: [] as Array<IUser>,
}
export const getCurrentUser = createAsyncThunk<IUser>(
    'auth/getCurrentUser',
    async () => {
        const response = await AuthService.getCurrentUser()
        return  response as IUser
    }
)


export const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action: PayloadAction<IUser>) => {
            state.users.push(action.payload)
        }

    },
    extraReducers: builder => {
        builder
            .getUser(getCurrentUser.fulfilled, (state, action)=>{

            })
    }
})

export const {addUser} = usersSlice.actions

export default usersSlice.reducer