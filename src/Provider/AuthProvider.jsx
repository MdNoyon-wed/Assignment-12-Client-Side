import React, { Children, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init'
import axios from 'axios';


const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
  }

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const resetPassword = email => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const logOut =  async () => {
    setLoading(true)
    await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {
      withCredentials: true
    } )
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,createUser => {
      setUser(createUser)
      setLoading(false)
    })
    return() => {
      unSubscribe()
    }
  },[])
  const updateUserProfile = profileInfo => {
    return updateProfile(auth,createUser,profileInfo)
  }
 
 

  const userInfo = {
    user,
    createUser,
    signIn,
    logOut,
   signInWithGoogle,
   resetPassword,
    loading,
    setLoading,
    updateUserProfile


  }


  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>

  );
};

export default AuthProvider;