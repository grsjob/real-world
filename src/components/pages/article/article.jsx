import React from 'react';
import Banner from "../../blocks/banner/banner";
import ArticleSubButtons from "../../blocks/article-subButtons/article-subButtons";
import {Link} from "react-router-dom";
import PostComment from "../../blocks/post-comment/post-comment";
import CommentsList from "../../blocks/comments-list/comments-list";

const Article = () => {
    return (
        <div className="article-page">

            <Banner/>

            <div className="container page">

                <div className="row article-content">
                    <div className="col-md-12">
                        <p>
                            Web development technologies have evolved at an incredible clip over the past few years.
                        </p>
                        <h2 id="introducing-ionic">Introducing RealWorld.</h2>
                        <p>It's a great solution for learning how other frameworks work.</p>
                    </div>
                </div>

                <hr/>

                <div className="article-actions">
                    <div className="article-meta">
                        <Link to="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg"/></Link>
                        <div className="info">
                            <Link to="" className="author">Eric Simons</Link>
                            <span className="date">January 20th</span>
                        </div>

                        <ArticleSubButtons/>
                    </div>
                </div>

                <div className="row">

                    <div className="col-xs-12 col-md-8 offset-md-2">

                        <PostComment/>

                        <CommentsList/>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Article;
