import React from 'react';
import Button from './forms/Button.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
           count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h2>Hello World</h2>
                { Button({ count: this.state.count, handleClick: this.handleClick }) }
            </div>
        );
    }
}

export default App;