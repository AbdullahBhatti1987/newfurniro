import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavBar = () => {
    return (
        <nav className="bg-gray-800 p-4 rounded-md shadow-lg">
            <div className="flex space-x-4">
                <Link 
                    to="/admin" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Dashboard
                </Link>
                <Link 
                    to="/admin/adminpenal" // Updated path
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Admin Penal
                </Link>
                <Link 
                    to="/admin/products" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Products
                </Link>
                <Link 
                    to="/admin/orders" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Orders
                </Link>
                <Link 
                    to="/admin/users" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Users
                </Link>
                <Link 
                    to="/admin/settings" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Settings
                </Link>
                <Link 
                    to="/admin/addproduct" 
                    className="text-white font-semibold hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-md px-3 py-2"
                >
                    Add Product
                </Link>
            </div>
        </nav>
    );
};

export default AdminNavBar;
