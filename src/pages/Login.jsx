import React from "react";
import PageTop from "../components/PageTop";
import { Component } from "../components/Input";
import { PassComponent } from "../components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GrGoogle } from "react-icons/gr";

import { auth } from "../utils/firebase.js";
import { useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

function Login() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSignIn = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("User successfully Sign In")
    navigate("/");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  };


  const HandleWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };


  return (
    <div className="">
      <PageTop heading={"Login"} linkName={"login"} />
      <div className="lg:w-5/12 md:w-4/6 w-11/12 mx-auto flex flex-col justify-center items-center py-6">
        <div className="w-full border-b-2">
          <h3 className="text-start text-2xl w-fit font-bold py-4 border-b-2 darkBorder min-w-[50%]">
            Sign in
          </h3>
        </div>
        <p className="text-start w-full py-3 text-sm">
          Insert your account information:
        </p>
        <div className="w-full">
          <form onSubmit={HandleSignIn} className="flex flex-col gap-4 w-full">
            <Component
              id={"emaillogin"}
              type={"email"}
              icon={HiMail}
              placeholder={"abdullah@gmail.com"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PassComponent
              placeholder={"Password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p className="text-start w-full py-3 text-sm">
              if you don't have account, please{" "}
              <Link
                to={"/auth/signup"}
                className="text-blue-500 font-bold pl-2"
              >
                Register Here
              </Link>
            </p>
            <div className="flex flex-row justify-between items-center gap-4">
              <button
                type="submit"
                className="darkColor py-4 text-white font-bold rounded-lg text-nowrap w-1/2"
              >
                Login
              </button>
              <button onClick={HandleWithGoogle} className="darkColor py-4 text-white font-bold rounded-lg text-nowrap w-1/2 flex flex-row justify-center items-center">
                Login with <GrGoogle className="pl-1 text-2xl" />
                oogle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
