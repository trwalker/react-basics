import React from 'react';

class AddGitUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();


        const instance = this;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${this.state.userName}`, true);
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const userData = JSON.parse(xhr.responseText);
                    instance.props.handleSubmit({ name: userData.name, company: userData.company, iconUrl: userData.avatar_url });
                    instance.setState({ userName: ''});
                } else {
                    console.error(xhr.statusText);
                }
            }
        };

        xhr.send(null);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="text"
                        value={this.state.userName}
                        onChange={(event) => this.setState({ userName: event.target.value })}
                        placeholder="Enter github username"
                        required/>
                    <button type="submit">Add Card</button>
                </div>
            </form>
        );
    }
};

export default AddGitUser;