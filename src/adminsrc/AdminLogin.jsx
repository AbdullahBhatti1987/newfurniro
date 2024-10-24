import React, { useState } from "react";

import { HiMail } from "react-icons/hi";
import { Component } from "../components/MyInput";
import { PassComponent } from "../components/PasswordInput";
import { auth } from "../utils/userfirebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const HandleLogin = async (e) => {
    e.preventDefault();
    console.log("admin email =>", email);
    console.log("admin password =>", password);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Admin User successfully Sign In");  
        navigate('/admin');     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">     
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 min-h-96 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          Admin Login
        </h2>
        <form onSubmit={HandleLogin} className="flex flex-col gap-4">
          <Component
            id={"adminid"}
            type={"email"}
            icon={HiMail}
            placeholder={"Admin User"}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
          <PassComponent
            placeholder={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 py-3 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          {/* Additional links can go here, e.g., "Forgot Password?" */}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
