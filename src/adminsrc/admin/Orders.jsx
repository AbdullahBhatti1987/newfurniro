
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    // useEffect(() => {
    //     const fetchOrders = async () => {
    //         const response = await axios.get('/api/orders'); // Adjust the API endpoint as needed
    //         setOrders(response.data);
    //     };
    //     fetchOrders();
    // }, []);

    return (
        <div>
            <h2>Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>Order ID: {order.id}</li>
                ))}
            </ul>
        </div>
    );
};

export default Orders;
