import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 rounded-md shadow-lg">
            <div className="flex space-x-4">
                <Link 
                    to="/adminpenal/admin" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Dashboard
                </Link>
                <Link 
                    to="/adminpenal/products" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Products
                </Link>
                <Link 
                    to="/adminpenal/orders" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Orders
                </Link>
                <Link 
                    to="/adminpenal/users" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Users
                </Link>
                <Link 
                    to="/adminpenal/settings" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Settings
                </Link>
            </div>
        </nav>
    );
};

export default AdminNavBar;
