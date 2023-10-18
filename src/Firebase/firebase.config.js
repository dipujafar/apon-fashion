// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgItmyk9dHVaxw6CmRXRa6FnCHz8wqGtI",
  authDomain: "apon-fashion.firebaseapp.com",
  projectId: "apon-fashion",
  storageBucket: "apon-fashion.appspot.com",
  messagingSenderId: "199566978620",
  appId: "1:199566978620:web:3d0874b4452849c1521d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
