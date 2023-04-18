// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFutPWT0uaNtD9eFcvNRPl-N9HjpBYmyk",
  authDomain: "nextgen-jan26.firebaseapp.com",
  projectId: "nextgen-jan26",
  storageBucket: "nextgen-jan26.appspot.com",
  messagingSenderId: "774223613823",
  appId: "1:774223613823:web:0a86d00bc49cd6165f144a",
  measurementId: "G-Y7LG5BY9ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



How to deploy

npm run build
firebase deploy

or

npm test