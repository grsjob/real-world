import React, {useState, FC, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {authApi, logInExistingUser, userReq} from "../../../services/AuthService";
import {useAppDispatch} from "../../../hooks/hooks";
import {addUser} from "../../../redux/reducers/userSlice";
import {IUserLogInResp} from "../../../models/IUserLogInResp";

interface RegisterProps {
    isRegisterPage: boolean
}


const Register: FC<RegisterProps> = ({isRegisterPage}) => {
    const [logInExistingUser,{data, isUninitialized}] = authApi.useLogInExistingUserMutation()
    const [registerNewUser, {error, status}] = authApi.useRegisterNewUserMutation()
    const userNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    if(!isRegisterPage){
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (isRegisterPage === undefined) {
            const useData: userReq = {
                user: {
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                }
            }

            await logInExistingUser(useData)
            navigate("/")
            console.log(data)
            // data && dispatch(addUser() )
        } else {
            const formData: userReq = {
                user: {
                    username: userNameRef.current!.value,
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                }
            }
            await registerNewUser(formData)
            console.log(status)
            navigate("/login")
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

                        <ul className="error-messages">
                            {emailError ? <li>That email or username are already taken</li> : null}
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
