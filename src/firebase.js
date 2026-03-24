// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC86N9150MoFf-uGkTsqvC0lc7TKSy8Kww",
  authDomain: "ecommerce-app-88593.firebaseapp.com",
  projectId: "ecommerce-app-88593",
  storageBucket: "ecommerce-app-88593.firebasestorage.app",
  messagingSenderId: "1059701954752",
  appId: "1:1059701954752:web:1950a52a5803365190b525"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);