// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8tzqkouCxoA1Gpchlh5OuY4pE-ZQ2f34",
  authDomain: "bearwear-90160.firebaseapp.com",
  projectId: "bearwear-90160",
  storageBucket: "bearwear-90160.appspot.com",
  messagingSenderId: "999341972355",
  appId: "1:999341972355:web:abcd58f8bd6a0645d774b6",
  measurementId: "G-YQ3M4XWM81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);