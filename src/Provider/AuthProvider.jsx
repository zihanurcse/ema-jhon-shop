import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

export const authContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    //new user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login email and password
    const loginEmailAndPassword = (email, password) =>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut
    const logOut = () =>{
        return signOut(auth)
    }
    
    //logged User check
    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser)
          });
          return () => {
            return unsubcribe();
          }
    },[])
    
    //share auth
    const authInfo = {
        user,
        createUser,
        loginEmailAndPassword,
        logOut
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;