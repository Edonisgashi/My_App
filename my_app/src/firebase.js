import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVR7JTN6eH6Gvwj00qbInI5LeKyUQNUNw",
  authDomain: "ebookstore-44d5d.firebaseapp.com",
  databaseURL: "https://ebookstore-44d5d-default-rtdb.firebaseio.com",
  projectId: "ebookstore-44d5d",
  storageBucket: "ebookstore-44d5d.appspot.com",
  messagingSenderId: "274762480979",
  appId: "1:274762480979:web:db1d1f4937fe97493675a6",
  measurementId: "G-SC9LXXYNCL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase();
