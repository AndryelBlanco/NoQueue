import React from "react";
import { signInWithEmailAndPassword, signInWithPopup, signOut  } from "firebase/auth";


export const AuthContext = React.createContext();

export const AuthContextProvider = ({children}) => { 

    const [user, setUser] = React.useState(null);
    
    async function signIn(email, password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            console.log('%cUSER LOGGED', 'background: #3dff4d; color: white;', userCredential.user)
            const user = userCredential.user;
           
            // ...
        })
        .catch((error) => {
            console.log('%cERRO', 'background: #ff3d3d; color: white;', error)
            const errorCode = error.code;
            const errorMessage = error.message;
            return error;
        });
    } 


    return (
        <AuthContext.Provider value={{ signIn }}>
            {children}
        </AuthContext.Provider>
    )
}