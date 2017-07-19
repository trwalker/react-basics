import React from 'react';
import CardList from '../cards/CardList.jsx';
import AddGitUser from '../forms/AddGitUser.jsx';

class CardView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    key: 0,
                    name: 'Tim Walker',
                    company: 'GoDaddy',
                    iconUrl: 'https://avatars2.githubusercontent.com/u/1594194?v=4'
                },
                {
                    key: 1,
                    name: 'Maciek Pacut',
                    company: 'n/a',
                    iconUrl: 'https://avatars0.githubusercontent.com/u/33384?v=4'
                },
                {
                    key: 2,
                    name: 'Ber Clausen',
                    company: 'eventbrite.com',
                    iconUrl: 'https://avatars0.githubusercontent.com/u/88155?v=4'
                }
            ]
        };

        this.addGitUser = this.addGitUser.bind(this);
    }

    addGitUser(userData) {
        console.log(userData);
        userData.key = this.state.cards.length;

        this.setState((prevState) => ({
            cards: [...prevState.cards, userData]
        }));
    }

    render() {
        return (
            <div className="container">
                <AddGitUser handleSubmit={this.addGitUser} />
                <CardList cards={this.state.cards} />
            </div>
        );
    }
}

export default CardView;