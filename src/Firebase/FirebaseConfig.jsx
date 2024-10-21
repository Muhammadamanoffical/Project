// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVCl-Rv__QfvWvSVMEAIiJvAMHjBqf7EU",
  authDomain: "e-shop-3d6e1.firebaseapp.com",
  projectId: "e-shop-3d6e1",
  storageBucket: "e-shop-3d6e1.appspot.com",
  messagingSenderId: "237044843129",
  appId: "1:237044843129:web:0e1cb04380e976da464aa8",
  measurementId: "G-2B4FSS347J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth}
