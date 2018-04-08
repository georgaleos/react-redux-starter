import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {bindActionCreators} from "redux";

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
        this.props.actions.createUser(this.state.user);
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
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
