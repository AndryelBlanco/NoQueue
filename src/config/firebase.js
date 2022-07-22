import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYrXm6MUj2GilfiF58bnpPshybl9ONrj4",
  authDomain: "noqueue-a0393.firebaseapp.com",
  projectId: "noqueue-a0393",
  storageBucket: "noqueue-a0393.appspot.com",
  messagingSenderId: "529737889881",
  appId: "1:529737889881:web:5a130ec5db31a48f06d948"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithCredential(auth, googleProvider);
    const user = res.user;
    // const q = query(collection(db, "users"), where("uid", "==", user.uid));
    // const docs = await getDocs(q);
    // if (docs.docs.length === 0) {
    //   await addDoc(collection(db, "users"), {
    //     uid: user.uid,
    //     name: user.displayName,
    //     authProvider: "google",
    //     email: user.email,
    //   });
    // }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const handleSignIn = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("USER LOGGED", user)
    // ...
  })
  .catch((error) => {
    console.log("THE ERROR", error)
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}

export const handleSignUp = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log("USER", user)
    // ...
  })
  .catch((error) => {
    console.log("ERROR", error)

    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export {
  auth,
  // db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  
  sendPasswordReset,
  logout,
};