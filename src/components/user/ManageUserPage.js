import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';

class ManageUserPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, props.user),
            errors: {}
        };
    }

    render() {
        return (
            <UserForm
                user={this.state.user}
                errors={this.state.errors}
                allUsers={this.props.users}/>
        );
    }
}

ManageUserPage.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    let user = {
        id: '',
        name: '',
        firstName: '',
        lastName: '',
        managerId: ''
    };

    const usersFormattedForDropdown = state.users.map(user => {
        return {
            value: user.id,
            text: user.firstName + ' ' + user.lastName
        };
    });

    return {
        user: user,
        users: usersFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
