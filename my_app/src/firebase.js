import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const StartFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBJ-tG0uokKccFKnHozdX1z_bCat4ADAGk",
    authDomain: "ebookstore-4281b.firebaseapp.com",
    databaseURL: "https://ebookstore-4281b-default-rtdb.firebaseio.com",
    projectId: "ebookstore-4281b",
    storageBucket: "ebookstore-4281b.appspot.com",
    messagingSenderId: "596797585802",
    appId: "1:596797585802:web:658152984e04e2d7893073",
  };

  const app = initializeApp(firebaseConfig);

  return getDatabase(app);
};

export default StartFirebase;
