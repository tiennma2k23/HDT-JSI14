import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
const firebaseConfig = {
  apiKey: "AIzaSyCeFhOd852yBEPfwpWznfEpdjgdwCxE-Ck",
  authDomain: "mindx-blog.firebaseapp.com",
  projectId: "mindx-blog",
  storageBucket: "mindx-blog.appspot.com",
  messagingSenderId: "1027591204225",
  appId: "1:1027591204225:web:ea7114f55d8ce921110c80",
  measurementId: "G-0ET9PD22BS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const subscription = [];

