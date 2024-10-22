// src/pages/Login.jsx
import React, { useState } from 'react';
// import axios from 'axios';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // API call for login
        // const response = await axios.post('/api/login', { username, password });
        // Handle response
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default AdminLogin;
