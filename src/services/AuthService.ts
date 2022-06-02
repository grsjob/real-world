import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IUser} from "../models/IUser";

export interface registerReq {
    user: IUser
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    tagTypes: ['User'],
    endpoints:(build)=>({
        registerNewUser: build.mutation<registerReq, registerReq>({
            query: (user) => ({
                url: '/users',
                method: 'POST',
                body: user
            }),
            invalidatesTags: ['User']
        })
    })
})
