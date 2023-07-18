import { React, createContext, useContext } from "react";
import { auth } from "./Firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating context");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const register = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password).then((res) => {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
      console.log(res);
    });
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((res) => {
      console.log(res);
    });
  };

  const logout = () => {
    const signOut = () => {
      signOut(auth).then((res) => {
        console.log(res);
      });
    };
  };

  return (
    <authContext.Provider
      value={{ register, login, logout, currentUser: auth.currentUser }}
    >
      {children}
    </authContext.Provider>
  );
};
