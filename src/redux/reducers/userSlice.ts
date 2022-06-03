import {IUser} from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserLogInResp} from "../../models/IUserLogInResp";
import {logInExistingUser} from "../../services/AuthService";


interface UserState {
    users: IUserLogInResp[];
    isAutorised: boolean;
}

const initialState: UserState = {
    users: [],
    isAutorised: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUser(state, action: PayloadAction<IUserLogInResp>){
            state.users.push(action.payload)
        },
        logIn(state){
            state.isAutorised = true
        },
        logOut(state){
            state.isAutorised = false
        },
    }
})

export const {addUser, logIn, logOut} = userSlice.actions
export default userSlice.reducer;