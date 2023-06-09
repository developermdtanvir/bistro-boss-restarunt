import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithGithub = () => {
        return (signInWithPopup(auth, githubProvider));
    }

    const loginWithFacebook = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }

    const createUserEamilPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUserEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            return () => {
                return unsubscribe()
            }
        })
    }, [])

    const [cart, setCart] = useState([])


    const authInfo = {
        loginWithGoogle,
        loginWithGithub,
        loginWithFacebook,
        createUserEamilPass,
        signinUserEmailPass,
        updateUser,
        logOutUser,
        user,
        loading,
        cart,
        setCart
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;