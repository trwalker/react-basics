import React from 'react';
import Card from '../cards/Card.jsx';

class CardView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Card />
            </div>
        );
    }
}

export default CardView;