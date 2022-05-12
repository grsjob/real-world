import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {$api} from "../../../api";


const Register = ({isRegisterPage}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const navigate = useNavigate();

    const signUp = (e) => {
        e.preventDefault();

        $api.post('/users', {
            user: {
                username: userName,
                email: email,
                password: password
            }
        })
            .then(({data}) => window.localStorage.setItem('Token', data.user.token))
            .then(()=>{
                navigate("/login")
            })
            .catch(error => {
                if(error.response.status === 422 ){
                    setEmailError(true)
                    console.log(error.response.data)
                    setUserName('')
                    setEmail('')
                    setPassword('')
                }
            });
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

                        <form onSubmit={signUp}>
                            {isRegisterPage
                                ?
                                <fieldset className="form-group">
                                    <input value={userName} onChange={e => setUserName(e.target.value)}
                                           className="form-control form-control-lg" type="text"
                                           placeholder="Your Name"/>
                                </fieldset>
                                : null
                            }
                            <fieldset className="form-group">
                                <input value={email} onChange={e => setEmail(e.target.value)}
                                       className="form-control form-control-lg" type="email"
                                       placeholder="Email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input value={password} onChange={e => setPassword(e.target.value)}
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
