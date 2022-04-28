import React from 'react';

const ArticleSubButtons = () => {
    return (
        <>
            <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i>
                &nbsp;
                Follow Eric Simons
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i>
                &nbsp;
                Favorite Post <span className="counter">(29)</span>
            </button>
        </>
    );
};

export default ArticleSubButtons;
