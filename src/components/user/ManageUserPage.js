import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import UserForm from './UserForm';
import {usersFormattedForDropdown} from "../../selectors/selectors";
import toastr from 'toastr';

export class ManageUserPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, props.user),
            errors: {},
            saving: false
        };

        this.updateUserState = this.updateUserState.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.user.id !== nextProps.user.id){
            this.setState({user: Object.assign({}, nextProps.user)});
        }
    }

    updateUserState(event) {
        const field = event.target.name;
        let user = Object.assign({}, this.state.user);
        user[field] = event.target.value;
        return this.setState({user: user});
    }

    userFormIsValid() {
        let formIsValid = true;
        let errors = {};

        if(this.state.user.firstName.length < 3) {
            errors.firstName = 'First name must be at least 3 characters.';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveUser(event) {
        event.preventDefault();

        if(!this.userFormIsValid()){
            return;
        }

        this.setState({saving: true});
        this.props.actions.saveUser(this.state.user)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('User saved');
        this.context.router.push('/users');
    }

    render() {
        return (
            <UserForm
                user={this.state.user}
                errors={this.state.errors}
                onChange={this.updateUserState}
                onSave={this.saveUser}
                saving={this.state.saving}
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

function getUserById(users, id){
    const user = users.filter(user => user.id === id);
    if(user.length) return user[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const userId = ownProps.params.id;

    let user = {
        id: '',
        name: '',
        firstName: '',
        lastName: '',
        managerId: ''
    };

    if(userId && state.users.length > 0) {
        user = getUserById(state.users, userId);
    }

    return {
        user: user,
        users: usersFormattedForDropdown(state.users)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
