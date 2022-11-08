import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    displayName: "sazzad",
  });
  const [loading, setLoading] = useState(true);

  //create a new users
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user profile update
  const userUpadetedProfile = (name, photURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photURL,
    });
  };

  // user logout
  const logOutUser = () => {
    setLoading(true);
    localStorage.removeItem("users");
    return signOut(auth);
  };

  // user onAuth change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentsUser) => {
      setUser(currentsUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    logInUser,
    logOutUser,
    userUpadetedProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
