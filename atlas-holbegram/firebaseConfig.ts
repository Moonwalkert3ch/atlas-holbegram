// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU7hKNA26C93NbahBOCwnup7fiAzMprv4",
  authDomain: "holbegram-43cb3.firebaseapp.com",
  projectId: "holbegram-43cb3",
  storageBucket: "holbegram-43cb3.appspot.com",
  messagingSenderId: "198102006809",
  appId: "1:198102006809:web:d451e17f9b1d50bb6b7e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Auth
export const auth = initializeAuth(app);