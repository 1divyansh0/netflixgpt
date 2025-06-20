// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyjot29TTJSzsj5z05rOPgCibErEgfuCI",
  authDomain: "netflixgpt-c14a9.firebaseapp.com",
  projectId: "netflixgpt-c14a9",
  storageBucket: "netflixgpt-c14a9.firebasestorage.app",
  messagingSenderId: "187151138474",
  appId: "1:187151138474:web:35e1fe9f09b2e033315ad3",
  measurementId: "G-ES87NYWMG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();