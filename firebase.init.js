import { initializeApp } from "firebase/app";
import {  getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWkF4CgJA9JRI2N6i6QXpz9Vs5lFgHxn0",
  authDomain: "tolex-ac897.firebaseapp.com",
  projectId: "tolex-ac897",
  storageBucket: "tolex-ac897.appspot.com",
  messagingSenderId: "648331709720",
  appId: "1:648331709720:web:751a42141972007a3fa26d"
};

const app = initializeApp(firebaseConfig);


export default app