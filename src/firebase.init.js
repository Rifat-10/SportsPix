// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDASc6C1ERpQW1D-7JnAi9gp6TSHszv3iE",
  authDomain: "sportspix-d6cc7.firebaseapp.com",
  projectId: "sportspix-d6cc7",
  storageBucket: "sportspix-d6cc7.appspot.com",
  messagingSenderId: "960858466071",
  appId: "1:960858466071:web:fcce2c50d2f814ff58f952",
  measurementId: "G-8K9VT83XY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;