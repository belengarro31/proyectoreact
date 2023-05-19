// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase productos that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAYmxAbQS_z7U3P9hRvGWLXu7ZbCDEz18",
  authDomain: "ecommercegarroreact.firebaseapp.com",
  projectId: "ecommercegarroreact",
  storageBucket: "ecommercegarroreact.appspot.com",
  messagingSenderId: "98404179158",
  appId: "1:98404179158:web:a52cec59f8e4d3b9337d77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app