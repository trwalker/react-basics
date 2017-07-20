import React from 'react';

const Card = (props) => {
    return (
        <div className="col-4">
            <div className="card" style={{width: '20rem'}}>
                <img className="card-img-top" src={props.iconUrl} width="318" height="318" alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.company}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;