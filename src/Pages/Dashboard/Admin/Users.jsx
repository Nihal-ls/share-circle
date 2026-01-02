import React, { useEffect, useState } from 'react';
import LoaidngSpinenr from '../../../../../../../programming hero/Milestone-11/ASSIGNMENT11/LoanLink/src/Components/Shared/LoaidngSpinenr';
import ManageUsersTable from '../../../Components/Dashboard/Admin/ManageUsersTable';

const Users = () => {
    const [users, setusers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:3000/users`)
            .then(res => res.json())
            .then(data => {
                setusers(data);
                setLoading(false)

            });
    }, []);

    if (loading) return <LoaidngSpinenr />
    console.log(users);
    return (
        <div>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                               {users?.map((user, index) => <ManageUsersTable user={user} index={index} key={user?._id} />)}

                </table>
            </div>

        </div>
    );
};

export default Users;