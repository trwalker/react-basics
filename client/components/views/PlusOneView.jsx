import React from 'react';
import ProgressBar from '../forms/ProgressBar.jsx';
import Button from '../forms/Button.jsx';

class PlusOneView extends React.Component {
    constructor(props) {
        super(props);

        this.state = { progress: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            progress: this.state.progress + 1
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>Do it, go now, now go...</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        { ProgressBar({ progress: this.state.progress }) }
                    </div>
                </div>
                <div className="row">
                    <div className="col form-group">
                        { Button({ handleClick: this.handleClick }) }
                    </div>
                </div>
            </div>
        );
    }
};

export default PlusOneView;