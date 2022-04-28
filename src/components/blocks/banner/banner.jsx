import React from 'react';
import {Link} from "react-router-dom";
import ArticleSubButtons from "../article-subButtons/article-subButtons";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">

                <h1>How to build webapps that scale</h1>

                <div className="article-meta">
                    <Link to=""><img src="http://i.imgur.com/Qr71crq.jpg"/></Link>
                    <div className="info">
                        <Link to="" className="author">Eric Simons</Link>
                        <span className="date">January 20th</span>
                    </div>
                    <ArticleSubButtons/>
                </div>

            </div>
        </div>
    );
};

export default Banner;
