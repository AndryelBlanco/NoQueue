import React from "react";
import { signInWithEmailAndPassword, signInWithPopup, signOut, getAuth, GoogleAuthProvider  } from "firebase/auth";
import { auth } from "../config/firebase";


export const AuthContext = React.createContext();
const googleProvider = new GoogleAuthProvider();

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


    const signInWithGoogle = async () => {
        try {
          const res = await signInWithPopup(auth, googleProvider);
          const user = res.user;
          console.log('response', user)
        //   if (docs.docs.length === 0) {
        //     await addDoc(collection(db, "users"), {
        //       uid: user.uid,
        //       name: user.displayName,
        //       authProvider: "google",
        //       email: user.email,
        //     });
        //   }
        } catch (err) {
          console.error('Err', err);
          alert(err.message);
        }
      };

    return (
        <AuthContext.Provider value={{ signIn, signInWithGoogle }}>
            {children}
        </AuthContext.Provider>
    )
}

