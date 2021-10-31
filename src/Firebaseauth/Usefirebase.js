import Firebaseinitialization from '../Firebasesetup/Firebaseinit';
import {updateProfile,signOut ,onAuthStateChanged ,signInWithEmailAndPassword ,createUserWithEmailAndPassword ,GithubAuthProvider , getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from 'react';

Firebaseinitialization();

const useFirebase = () => {
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [isloading, setIsloading] = useState(true)
    //Create user with password and email
    const RegisterUser = (email, password) => {
        setIsloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
       
    }
    //Email and password Sign in
    const LoginWithEmailAndPass = (email, password,name) => {
        setIsloading(true)
        return signInWithEmailAndPassword(auth, email, password,name)
            
    }
    //Sign in with google
    const LoginWithGoogle = () => {
        setIsloading(true)
          return  signInWithPopup(auth, googleprovider)
            
        }
    //get user Name 
    const SetUserName = (name) => {
 
            updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
              // Profile updated!
              // ...
            }).catch((error) => {
              // An error occurred
              // ...
            });
    } 
    
    //Geting current user
    useEffect(() => {
        setIsloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
              const uid = user.uid;
            } else {

            }
            setIsloading(false)
          });
    },[])
    //user LOG out
    const LogoutUser = () => {
        return signOut(auth)
    }
    return {
        setUser,
        LoginWithGoogle,
        user,
        RegisterUser,
        LoginWithEmailAndPass,
        LogoutUser,
        isloading,
        setIsloading,
        SetUserName
    }
}

export default useFirebase;