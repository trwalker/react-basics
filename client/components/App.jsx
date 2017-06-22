import React from 'react';
import Button from './forms/Button.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Hello World</h2>
                { Button({ title: "Go Now, Now Go"}) }
            </div>
        );
    }
}

export default App;