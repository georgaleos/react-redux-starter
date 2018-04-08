import React, {PropTypes} from 'react';
import UserListRow from './UserListRow';

const UserList = ({users}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <UserListRow key={user.id} user={user}/>
            )}
            </tbody>
        </table>
    );
};

UserList.propTypes = {
    users: PropTypes.array.isRequired
};

export default UserList;
