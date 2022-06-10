// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp0ZaY6kdIiOZ2d-NKVTNifOp7qGqP5hQ",
  authDomain: "fun-shopping-caa25.firebaseapp.com",
  projectId: "fun-shopping-caa25",
  storageBucket: "fun-shopping-caa25.appspot.com",
  messagingSenderId: "723435521241",
  appId: "1:723435521241:web:9532bc62c1407667f36ac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;