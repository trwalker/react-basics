import React from 'react';
import Card from './Card.jsx';

const CardList = (props) => {
    return (
        <div className="row">
            { props.cards.map(card => <Card {...card} />) }
        </div>
    );
};

export default CardList;