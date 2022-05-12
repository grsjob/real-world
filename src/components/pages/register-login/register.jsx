import React, {useState} from 'react';
// import axios from 'axios';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addUser} from "../../../redux/usersSlice/usersSlice";
//
// const instance = axios.create({
//     baseURL: 'https://api.realworld.io/api',
//     headers: {
//         'accept': 'application/json',
//         'Content-Type': 'application/json'
//     }
// });
// let token = ''
//
// instance.post('/users', {
//     user: {
//         username: "grm28rus",
//         email: "grm28rus@yandex.ru",
//         password: "159753"
//     }
// }).then(({data}) => token = data.user.token).then(() => console.log(token));


const Register = ({isRegisterPage}) => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    const signUp = (e) => {
        //
        // console.log(`name ${userName}`)
        // console.log(`email ${email}`)
        // console.log(`password ${password}`)
        e.preventDefault();
        dispatch(addUser({userName, email, password}))
        dispatch(addUser({userName, email, password}))
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
                            <li>That email is already taken</li>
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
