// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-fe1af.firebaseapp.com",
  projectId: "mern-auth-fe1af",
  storageBucket: "mern-auth-fe1af.appspot.com",
  messagingSenderId: "802705860561",
  appId: "1:802705860561:web:051e241429bf7509e8a2f0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);