import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";
import {IUserLogInResp} from "../models/IUserLogInResp";

export interface userReq {
    user: IUser
}
export interface logInExistingUser {
    user: IUserLogInResp
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    // tagTypes: ['User'],
    endpoints:(build)=>({
        registerNewUser: build.mutation<userReq, userReq>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            // invalidatesTags: ['User']
        }),
        logInExistingUser: build.mutation<logInExistingUser, userReq>({
            query: (user) => ({
                url: '/users/login',
                method: 'POST',
                body: user
            }),
            // invalidatesTags: ['User']
        })
    })
})
