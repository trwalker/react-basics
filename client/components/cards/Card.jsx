import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-1">
                <img src="http://placehold.it/75" />
            </div>
            <div className="col-2">
                <div>Name...</div>
                <div>Company...</div>
            </div>
        </div>
    );
};

export default Card;