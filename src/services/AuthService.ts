import {$api} from "../api";
import {IUser} from "../models/redux/users";
import {AxiosResponse} from "axios";


export default class AuthService {

    static getCurrentUser = async ():Promise<AxiosResponse<IUser>> => {
        const token = window.localStorage.getItem('Token')

        $api.interceptors.request.use((config) => {
            config.headers!.Authorization = `Token ${token}`
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

       return $api.get<IUser>('/user')
    }

}