import React from 'react';
import {Link} from "react-router-dom";
import ArticlePreview from "/src/components/blocks/article-preview/article-preview";
import TagList from "/src/components/blocks/tag-list/tag-list"

const Home = () => {
    return (
        <div className="home-page">
            <div className="banner">
                <div className="container">
                    <h1 className="logo-font">conduit</h1>
                    <p>A place to share your knowledge.</p>
                </div>
            </div>
            <div className="container page">
                <div className="row">
                    <div className="col-md-9">
                        <div className="feed-toggle">
                            <ul className="nav nav-pills outline-active">
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to="">Your Feed</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="">Global Feed</Link>
                                </li>
                            </ul>
                        </div>
                        <ArticlePreview/>
                    </div>
                    <div className="col-md-3">
                        <div className="sidebar">
                            <p>Popular Tags</p>
                            <TagList/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            );
            };

            export default Home;
