import React from "react";
import { Outlet, Link } from "react-router-dom";



export default function AdminPenal() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-gray-500 text-white py-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Admin Panel</h1>
      </header>
      <div className="flex flex-1">
        <nav className="w-64 bg-gray-700 text-white px-4 py-8">
          

          <ul className="space-y-4">
            <li>
              <Link
                to="admin"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Admin
              </Link>
            </li>
            <li>
              <Link
                to="products"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="orders"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="users"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                to="settings"
                className="block py-2 px-4 rounded hover:bg-blue-700"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
