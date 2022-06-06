interface Errors {
    email?: string[],
    username?: string[],
    password?: string[],

}
export type RegisterDataErrors =  {
    errors: Errors
}
