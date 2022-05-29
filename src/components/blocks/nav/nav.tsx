import React, {useEffect} from 'react';
import {Link, NavLink} from "react-router-dom";
import {useAppSelector, useAppDispatch} from '../../../redux/hooks/hooks'
import AuthService from "../../../services/AuthService";


const Nav = () => {
    const isAutorised = useAppSelector(state => state.app.isAutorised)
    const dispatch = useAppDispatch()
    let email: string
    let username: string
    let image: string

    useEffect(() => {
        const data = AuthService.getCurrentUser()
        email = data.email
    }, [isAutorised]);

    console.log(email)
    console.log(username)
    console.log(image)

    return (
        <nav className='navbar navbar-light'>
            <div className='container'>
                <Link className="navbar-brand" to="/">conduit</Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="editor">
                            <i className="ion-compose"></i>&nbsp;New Article
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="settings">
                            <i className="ion-gear-a"></i>&nbsp;Settings
                        </NavLink>
                    </li>
                    {isAutorised ? null : <li className="nav-item">
                        <NavLink className="nav-link" to="login">Sign in</NavLink></li>}
                    {isAutorised ? null : <li className="nav-item">
                        <NavLink className="nav-link" to="register">Sign up</NavLink></li>}
                    {/*{*/}
                    {/*    isAutorised ? null :*/}
                    {/*        <li className='nav-item'>*/}
                    {/*            <NavLink to=':user' className='nav-link'>*/}
                    {/*                <img src={}/>*/}
                    {/*            </NavLink>*/}
                    {/*        </li>*/}
                    {/*}*/}
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
