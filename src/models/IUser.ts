export interface IUserRegNewUser{
    username: string,
    email: string,
    password: string
}

export interface IUserLogIn{
    email: string,
    password: string
}

export interface IUserLogInResp {
    email: string,
    token: string,
    username: string,
    bio: string,
    image: string
}

