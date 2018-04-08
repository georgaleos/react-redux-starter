import React, {PropTypes} from 'react';

class UsersPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {
                name: ""
            }
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onNameChange(event) {
        const user = this.state.user;
        user.name = event.target.value;
        this.setState({user: user});
    }

    onClickSave(){
        alert(`Saving ${this.state.user.name}`);
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                <h2>Add User</h2>

                <input
                    type="text"
                    onChange={this.onNameChange}
                    value={this.state.user.name}/>

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}/>
            </div>
        );
    }
}

export default UsersPage;
