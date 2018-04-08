import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as userActions from '../../actions/userActions';
import {bindActionCreators} from "redux";
import UserList from "./UserList";

class UsersPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {users} = this.props;

        return (
            <div>
                <h1>Users</h1>
                <UserList users={users}/>
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
