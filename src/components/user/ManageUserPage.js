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

        this.updateUserState = this.updateUserState.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    updateUserState(event) {
        const field = event.target.name;
        let user = Object.assign({}, this.state.user);
        user[field] = event.target.value;
        return this.setState({user: user});
    }

    saveUser(event) {
        event.preventDefault();
        this.props.actions.saveUser(this.state.user);
        this.context.router.push('/users');
    }

    render() {
        return (
            <UserForm
                user={this.state.user}
                errors={this.state.errors}
                onChange={this.updateUserState}
                onSave={this.saveUser}
                allUsers={this.props.users}/>
        );
    }
}

ManageUserPage.propTypes = {
    user: PropTypes.object.isRequired,
    users: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageUserPage.contextTypes = {
    router: PropTypes.object
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
