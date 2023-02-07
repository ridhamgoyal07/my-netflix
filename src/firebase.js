import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";
import {
  getAuth,
  // GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCSw_yRC1iBi4rXxv5isnph4uIUGh8MLLA",
  authDomain: "mynetflix-32e8b.firebaseapp.com",
  projectId: "mynetflix-32e8b",
  storageBucket: "mynetflix-32e8b.appspot.com",
  messagingSenderId: "906323368024",
  appId: "1:906323368024:web:a5a4df332fc3975f5e522d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
// const storage = getStorage(app);

export default db;
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
};
