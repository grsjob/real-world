import React from 'react';
import {Link} from "react-router-dom";

const NavPills = () => {
    return (
        <ul className="nav nav-pills outline-active">
            <li className="nav-item">
                <Link className="nav-link active" to="">My Articles</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Favorited Articles</a>
            </li>
        </ul>
    );
};

export default NavPills;
