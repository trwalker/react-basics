import React from 'react';

class AddGitUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: ''
        };

        this.addUserClick = this.addUserClick.bind(this);
    }

    addUserClick() {
        const instance = this;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${this.state.userName}`, true);
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const userData = JSON.parse(xhr.responseText);
                    instance.props.addUserCallback({ name: userData.name, company: userData.company, iconUrl: userData.avatar_url });
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
            <div className="container">
                <div className="row ">
                    <div className="col-12" style={{margin: '20px 0'}}>
                        <div className="input-group">
                            <input type="text"
                                   className="form-control"
                                   placeholder="Github username"
                                   aria-describedby="basic-addon2"
                                   value={this.state.userName}
                                   onChange={(event) => this.setState({ userName: event.target.value })}
                                   required />
                            <span id="basic-addon2" className="input-group-addon">@github.com</span>
                        </div>
                    </div>
                    <div className="col-12" style={{marginBottom: '20px'}}>
                        <div className="input-group">
                            <button className="btn-primary btn-lg btn-block" type="button" onClick={this.addUserClick}>Add User</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default AddGitUser;