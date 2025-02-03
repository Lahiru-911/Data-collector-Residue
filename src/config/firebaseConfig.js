import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdmH1UnC7u0sDpB84bwiF69PH5IQKqr8Q",
  authDomain: "data-residue-787ee.firebaseapp.com",
  databaseURL: "https://data-residue-787ee-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "data-residue-787ee",
  storageBucket: "data-residue-787ee.firebasestorage.app",
  messagingSenderId: "693442789705",
  appId: "1:693442789705:web:22d08a1872bb093b8fda98",
  measurementId: "G-PWFLF0VGGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
