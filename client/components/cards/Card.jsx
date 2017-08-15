import React from 'react';

const Card = (props) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="card" style={{width: '100%', marginBottom: '20px'}}>
                <img className="card-img-top" src={props.iconUrl} height="350" alt="Card image cap" />
                <div className="card-block">
                    <h4 className="card-title">{props.name}</h4>
                    <p className="card-text">{props.company || 'None'}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;