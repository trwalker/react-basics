import React from 'react';

const Card = (props) => {
    return (
        <div className="row">
            <div className="col-1">
                <img width="75" src={props.iconUrl} />
            </div>
            <div className="col-3">
                <h3>{props.name}</h3>
                <div>{props.company}</div>
            </div>
        </div>
    );
};

export default Card;