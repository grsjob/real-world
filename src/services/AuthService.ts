import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUserLogIn, IUserLogInResp, IUserRegNewUser} from "../models/IUser";

export interface userLogInReq {
    user: IUserLogIn
}
export interface userRegNewUserReq {
    user: IUserRegNewUser
}

export interface logInExistingUser {
    user: IUserLogInResp
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    tagTypes: ['User'],
    endpoints:(build)=>({
        registerNewUser: build.mutation<userLogInReq, userRegNewUserReq>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        }),
        logInExistingUser: build.mutation<logInExistingUser, userLogInReq>({
            query: (user) => ({
                url: '/users/login',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        })
    })
})
