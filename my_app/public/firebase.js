// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0wVx4BZzLN_tdtY_n2Q4bm3tHmeprmBo",
  authDomain: "e-book-297df.firebaseapp.com",
  databaseURL: "https://e-book-297df-default-rtdb.firebaseio.com",
  projectId: "e-book-297df",
  storageBucket: "e-book-297df.appspot.com",
  messagingSenderId: "132080745618",
  appId: "1:132080745618:web:085752efb8e2329a04fa4b",
  measurementId: "G-PLLMH15L2Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
