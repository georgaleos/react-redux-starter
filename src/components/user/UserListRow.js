import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
    return (
        <tr>
            <td><a href={user.id} target="_blank">View</a></td>
            <td><Link to={'/user/' + user.id}>{user.firstName}</Link></td>
            <td>{user.lastName}</td>
        </tr>
    );
};

UserListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListRow;
