import React from 'react';
import CardList from '../cards/CardList.jsx';
import AddGitUser from '../forms/AddGitUser.jsx';

class CardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        this.addUserCallback = this.addUserCallback.bind(this);
    }

    addUserCallback(userData) {
        console.log(userData);
        userData.key = this.state.cards.length;

        this.setState((prevState) => ({
            cards: [...prevState.cards, userData]
        }));
    }

    render() {
        return (
            <div className="container">
                <AddGitUser addUserCallback={this.addUserCallback} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default CardView;