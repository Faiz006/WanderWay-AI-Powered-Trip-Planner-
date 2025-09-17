import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5jdqMUMhDGd5T_GSDb4GBVPRiF9xYlb0",
  authDomain: "wanderway-5ae84.firebaseapp.com",
  projectId: "wanderway-5ae84",
  storageBucket: "wanderway-5ae84.firebasestorage.app",
  messagingSenderId: "604803327259",
  appId: "1:604803327259:web:d8a552d2e6252d89a89fbe",
  measurementId: "G-8WXFK35EVX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)