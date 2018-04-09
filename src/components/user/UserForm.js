import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const UserForm = ({user, allUsers, onSave, onChange, saving, errors}) => {
    return (
        <form>
            <h1>Manage User</h1>

            <TextInput
                name="firstName"
                label="First Name"
                value={user.firstName}
                onChange={onChange}
                error={errors.firstName}/>

            <TextInput
                name="lastName"
                label="Last Name"
                value={user.lastName}
                onChange={onChange}
                error={errors.lastName}/>

            <SelectInput
                name="managerId"
                label="Manager"
                value={user.managerId}
                defaultOption="Select Manager"
                options={allUsers}
                onChange={onChange} error={errors.managerId}/>

            <input
                type="submit"
                disabled={saving}
                value={saving ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
};

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    allUsers: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool,
    errors: PropTypes.object
};

export default UserForm;
