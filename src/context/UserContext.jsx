import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utils/userfirebase.js";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [user, setUser] = useState({ isLogin: false, email: "" });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ isLogin: true, email: user.email, username: user.userName });
        console.log("User login he", user);
      } else {
        setUser({ isLogin: false, email: "" });
        console.log("User login nahn he");
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;