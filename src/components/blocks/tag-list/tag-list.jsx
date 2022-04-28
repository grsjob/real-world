import React from 'react';
import {Link} from "react-router-dom";

const TagList = () => {
    return (
        <ul className="tag-list">
            <li><Link to="" className="tag-pill tag-default">programming</Link></li>
            <li><Link to="" className="tag-pill tag-default">javascript</Link></li>
            <li><Link to="" className="tag-pill tag-default">emberjs</Link></li>
            <li><Link to="" className="tag-pill tag-default">angularjs</Link></li>
            <li><Link to="" className="tag-pill tag-default">react</Link></li>
            <li><Link to="" className="tag-pill tag-default">mean</Link></li>
            <li><Link to="" className="tag-pill tag-default">node</Link></li>
            <li><Link to="" className="tag-pill tag-default">rails</Link></li>
        </ul>
    );
};

export default TagList;
