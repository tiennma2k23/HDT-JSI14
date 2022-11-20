import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZmIAibQ9F5Wl69tEMayRrVUFuqmnKXok",
  authDomain: "ss6demo.firebaseapp.com",
  projectId: "ss6demo",
  storageBucket: "ss6demo.appspot.com",
  messagingSenderId: "840505474583",
  appId: "1:840505474583:web:1f526ba7daab72b8b96652",
  measurementId: "G-7H18PEBMMP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const subscription = [];
