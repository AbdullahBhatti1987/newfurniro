
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         const response = await axios.get('/api/users'); // Adjust the API endpoint as needed
    //         setUsers(response.data);
    //     };
    //     fetchUsers();
    // }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.username}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
