import React from 'react';

const ManageUsersTable = ({ user, index }) => {
    console.log(user, index);
    return (
        <tbody>
            {/* row 1 */}
            <tr className=''>
                <th>{index  + 1 }</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <button className='btn bg-red-100 hover:bg-red-500 hover:text-white  p-2 text-red-500'>Remove</button>
                </td>
            </tr>

        </tbody>
    );
};

export default ManageUsersTable;