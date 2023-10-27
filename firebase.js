// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv9N0FTQVt2G8h6z6jYJpEflW9j_975sU",
  authDomain: "mtceey-9deaa.firebaseapp.com",
  projectId: "mtceey-9deaa",
  storageBucket: "mtceey-9deaa.appspot.com",
  messagingSenderId: "1077469887956",
  appId: "1:1077469887956:web:6614926e6df8eecd53aa41"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {storage};
export { auth };
export { db };