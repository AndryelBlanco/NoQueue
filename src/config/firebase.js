import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYrXm6MUj2GilfiF58bnpPshybl9ONrj4",
    authDomain: "noqueue-a0393.firebaseapp.com",
    projectId: "noqueue-a0393",
    storageBucket: "noqueue-a0393.appspot.com",
    messagingSenderId: "529737889881",
    appId: "1:529737889881:web:5a130ec5db31a48f06d948"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
