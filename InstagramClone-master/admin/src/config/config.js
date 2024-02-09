// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRY-zW5MAuBbJHO8oi1yImy8z5bdjg4nY",
  authDomain: "innov8x-f2ee7.firebaseapp.com",
  databaseURL: "https://innov8x-f2ee7-default-rtdb.firebaseio.com",
  projectId: "innov8x-f2ee7",
  storageBucket: "innov8x-f2ee7.appspot.com",
  messagingSenderId: "420249175542",
  appId: "1:420249175542:web:27fbeacf13e56df89bf3d7",
  measurementId: "G-VJB2NVWTPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);