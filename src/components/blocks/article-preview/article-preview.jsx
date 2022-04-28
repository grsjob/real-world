import React from 'react';
import {Link} from "react-router-dom";

const ArticlePreview = () => {
    return (
        <ul>
            <li className="article-preview">
                <div className="article-meta">
                    <Link to="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></Link>
                    <div className="info">
                        <Link to="" className="author">Eric Simons</Link>
                        <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                        <i className="ion-heart"></i> 29
                    </button>
                </div>
                <Link to="" className="preview-link">
                    <h2>How to build webapps that scale</h2>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                </Link>
                <ul className="tag-list">
                </ul>
            </li>
            <li className="article-preview">
                <div className="article-meta">
                    <Link to="profile.html"><img src="http://i.imgur.com/N4VcUeJ.jpg"/></Link>
                    <div className="info">
                        <Link to="" className="author">Albert Pai</Link>
                        <span className="date">January 20th</span>
                    </div>
                    <button className="btn btn-outline-primary btn-sm pull-xs-right">
                        <i className="ion-heart"></i> 32
                    </button>
                </div>
                <Link to="" className="preview-link">
                    <h2>The song you won't ever stop singing. No matter how hard you try.</h2>
                    <p>This is the description for the post.</p>
                    <span>Read more...</span>
                </Link>
                <ul className="tag-list">
                </ul>
            </li>

        </ul>
    );
};

export default ArticlePreview;
