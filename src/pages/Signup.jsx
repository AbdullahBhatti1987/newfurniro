"use client"
import React, { useState } from "react";
import PageTop from "../components/PageTop";
import { Component } from "../components/Input";
import { PassComponent } from "../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaPhone } from "react-icons/fa6";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../utils/firebase";
import { doc, setDoc } from "firebase/firestore";


function Signup() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          const userDetail = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
          };
         
          console.log("User created:", user);
          const userRef = doc(db, "Users", user.uid);
          try {
            setDoc(userRef, userDetail);
            console.log("User data successfully stored!");
            navigate("/");
          } catch (error) {
            console.error("Error storing user data: ", error);
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else {
      alert("Password Incorrect")
    }
  };

  return (
    <div>
      <PageTop heading={"Signup"} linkName={"signup"} />
      <div className="lg:w-5/12 md:w-4/6 w-11/12 mx-auto flex flex-col justify-center items-center py-6">
        <div className="w-full border-b-2">
          <h3 className="text-start text-2xl w-fit font-bold py-4 border-b-2 darkBorder min-w-[50%]">
            Signup
          </h3>
        </div>
        <p className="text-start w-full py-3 text-sm">
          Insert your account information:
        </p>
        <form onSubmit={handleSignUp} className="w-full">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between lg:gap-4 md:gap-3 gap-2">
              <Component
                id={"firstname"}
                type={"text"}
                icon={FaRegUser}
                placeholder={"First name"}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Component
                id={"lastname"}
                type={"text"}
                icon={FaRegUser}
                placeholder={"Last name"}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Component
              id={"username"}
              type={"text"}
              icon={FaRegUser}
              placeholder={"username"}
              onChange={(e) => setUserName(e.target.value)}
            />
            <Component
              id={"phonenumber"}
              type={"text"}
              icon={FaPhone}
              placeholder={"Phone Number"}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Component
              id={"emailsignup"}
              type={"email"}
              icon={HiMail}
              placeholder={"abdullah@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PassComponent
              placeholder={"Password"} 
              id={"password"}
              onChange={(e) => setPassword(e.target.value)}
              />
            <PassComponent
              id={"confirmpassword"}
              placeholder={"Confirm Password"}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            <p className="text-start w-full py-3 text-sm">
              if you have an account, please{" "}
              <Link to={"/auth/login"} className="text-blue-500 font-bold pl-2">
                Login Here
              </Link>
            </p>
            <button
              type="submit"
              className="darkColor py-4 lg:px-24 md:px-12 px-6 text-white font-bold rounded-lg  w-1/2"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
