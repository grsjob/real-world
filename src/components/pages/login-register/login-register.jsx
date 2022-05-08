import React from 'react';
import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://api.realworld.io/api',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
});
let token =''

instance.post('/users',{
    user: {
        username: "grm28rus",
        email: "grm28rus@yandex.ru",
        password: "159753"
    }
}).then(({data})=> token = data.user.token ).then(()=>console.log(token));





const LoginRegister = () => {


    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">

                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <a href="">Have an account?</a>
                        </p>

                        <ul className="error-messages">
                            <li>That email is already taken</li>
                        </ul>

                        <form>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Your Name"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="text" placeholder="Email"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <input className="form-control form-control-lg" type="password" placeholder="Password"/>
                            </fieldset>
                            <button className="btn btn-lg btn-primary pull-xs-right">
                                Sign up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LoginRegister;
