import React, {useState, FC, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {authApi, userLogInReq, userRegNewUserReq} from "../../../services/AuthService";
import {useAppDispatch} from "../../../hooks/hooks";
import {addUser, logIn} from "../../../redux/reducers/userSlice";
import {css, jsx} from '@emotion/react'
import {RegisterDataErrors} from "../../../models/errors/registerErrors";

interface RegisterProps {
    isRegisterPage: boolean
}

const Register: FC<RegisterProps> = ({isRegisterPage}) => {
    const [logInExistingUser] = authApi.useLogInExistingUserMutation()
    const [registerNewUser] = authApi.useRegisterNewUserMutation()
    const userNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const [loginError, setLoginError] = useState(false);
    const [registerError, setRegisterError] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!isRegisterPage) {
            const useData: userLogInReq = {
                user: {
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                }
            }
            const result = await logInExistingUser(useData)
            if ("data" in result) {
                const user = result.data.user
                localStorage.setItem('token', user.token)
                dispatch(addUser(user))
                dispatch(logIn())
                navigate("/")

            } else if ('error' in result) {
                setLoginError(true)
                emailRef.current!.value = ''
                passwordRef.current!.value = ''
            }
        } else {
            const formData: userRegNewUserReq = {
                user: {
                    username: userNameRef.current!.value,
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                }
            }
            const result = await registerNewUser(formData)
            if ("data" in result) {
                navigate("/login")
            } else if ('error' in result && 'data' in result.error) {
                setRegisterError(true)
                emailRef.current!.value = ''
                passwordRef.current!.value = ''
                const data: RegisterDataErrors = result.error.data as RegisterDataErrors
                let message = ''
                for(let key in data.errors){
                    message += key + ' ' + data.errors[key as keyof typeof data.errors] + ' '
                }
                setErrorMassage(message)
            }

        }


    }
    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">{isRegisterPage ? 'Sign up' : 'Sign in'}</h1>
                        <p className="text-xs-center">
                            {isRegisterPage ? <Link to="/login">Have an account?</Link> :
                                <Link to="/register">Need an account?</Link>}
                        </p>

                        <ul className="error-messages"
                            style={{
                                listStyle: `none`,
                            }}>
                            {loginError ? <li>Email or password are incorrect</li> : null}
                            {registerError ? <li>{errorMassage}</li> : null}
                        </ul>

                        <form onSubmit={handleSubmit}>
                            {isRegisterPage
                                ?
                                <fieldset className="form-group">
                                    <input ref={userNameRef}
                                           className="form-control form-control-lg" type="text"
                                           placeholder="Your Name"/>
                                </fieldset>
                                : null
                            }
                            <fieldset className="form-group">
                                <input ref={emailRef}
                                       className="form-control form-control-lg" type="email"
                                       placeholder="Email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input ref={passwordRef}
                                       className="form-control form-control-lg" type="password"
                                       placeholder="Password"/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right"
                                    type='submit'>
                                {isRegisterPage ? 'Sign up' : 'Sign in'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
