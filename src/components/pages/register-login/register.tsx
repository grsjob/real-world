import React, {useState, FC, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authApi, registerReq} from "../../../services/AuthService";
import {useAppDispatch} from "../../../hooks/hooks";

interface RegisterProps {
    isRegisterPage: boolean
}

const Register: FC<RegisterProps> = ({isRegisterPage}) => {

    const [registerNewUser, {error,status}] = authApi.useRegisterNewUserMutation()
    const userNameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(userNameRef.current!.value
            && emailRef.current!.value
            && passwordRef.current!.value){

            const formData: registerReq = {
                user: {
                    username: userNameRef.current!.value,
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                }
            }

            if(!isRegisterPage){

                navigate("/")

            } else {
                await registerNewUser(formData)
                navigate("/login")
            }

        } else {
            setEmailError(true)

        }





    }



    //     if(!isRegisterPage){
    //         // $api.post('/users/login', {
    //         //     user: {
    //         //         email: email,
    //         //         password: password
    //         //     }
    //         // })
    //         //     .then(({data}) => {
    //         //         window.localStorage.setItem('Token', data.user.token)
    //         //     })
    //         //     .then(()=>{
    //         //         dispatch(toggleStatusAutorisation())
    //         //         navigate("/")
    //         //     })
    //         //     .catch(error => console.log(error))
    //     } else {
    //         registerNewUser(formData)
    //         console.log(data)
    //     //     $api.post('/users', {
    //     //         user: {
    //     //             username: userName,
    //     //             email: email,
    //     //             password: password
    //     //         }
    //     //     })
    //     //         .then(({data}) => window.localStorage.setItem('Token', data.user.token))
    //     //         .then(()=>{
    //     //             navigate("/login")
    //     //         })
    //     //         .catch(error => {
    //     //             if(error.response.status === 422 ){
    //     //                 setEmailError(true)
    //     //                 console.log(error.response.data)
    //     //                 setUserName('')
    //     //                 setEmail('')
    //     //                 setPassword('')
    //     //             }
    //     //         });
    //     // }
    //
    //
    // }

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
