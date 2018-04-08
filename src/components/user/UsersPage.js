import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';

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
        this.props.createUser(this.state.user);
    }

    userRow(user, index) {
        return <div key={index}>{user.name}</div>;
    }

    render() {
        return (
            <div>
                <h1>Users</h1>
                {this.props.users.map(this.userRow)}
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

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createUser: user => dispatch(userActions.createUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
