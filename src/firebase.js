// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4fDilOuf5Ux7CbmZeDeRctr4sr9GSxe0",
  authDomain: "challange-418c1.firebaseapp.com",
  projectId: "challange-418c1",
  storageBucket: "challange-418c1.appspot.com",
  messagingSenderId: "174089061963",
  appId: "1:174089061963:web:b4ded06ca0748d40e5afce",
  measurementId: "G-XZS6MB9K59",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
