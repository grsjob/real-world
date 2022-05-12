import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Nav = () => {
    const isAutorised = useSelector(state => state.app.isAutorised)

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

                </ul>
            </div>
        </nav>
    );
};

export default Nav;
