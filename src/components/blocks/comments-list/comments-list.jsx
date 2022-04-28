import React from 'react';
import {Link} from "react-router-dom";
import {StyledCommentsList} from "./styles";

const CommentsList = () => {
    return (
        <StyledCommentsList>
            <li className="card">
                <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional
                        content.</p>
                </div>
                <div className="card-footer">
                    <Link to="" className="comment-author">
                        <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                    </Link>
                    &nbsp;
                    <Link to="" className="comment-author">Jacob Schmidt</Link>
                    <span className="date-posted">Dec 29th</span>
                </div>
            </li>

            <li className="card">
                <div className="card-block">
                    <p className="card-text">With supporting text below as a natural lead-in to additional
                        content.</p>
                </div>
                <div className="card-footer">
                    <Link to="" className="comment-author">
                        <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                    </Link>
                    &nbsp;
                    <Link to="" className="comment-author">Jacob Schmidt</Link>
                    <span className="date-posted">Dec 29th</span>
                    <span className="mod-options">
              <i className="ion-edit"></i>
              <i className="ion-trash-a"></i>
            </span>
                </div>
            </li>
        </StyledCommentsList>
    );
};

export default CommentsList;
