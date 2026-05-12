// ============================================================
//  FIREBASE CONFIGURATION — plug your project details in here
//  1. Go to console.firebase.google.com
//  2. Create / open your project → Project Settings → Your apps
//  3. Register a Web app and copy the config object below
// ============================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp }
  from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9diNAQGMwpVaoRcBXcYHOfre7KTo8i1E",
  authDomain: "web-app-2ecf8.firebaseapp.com",
  projectId: "web-app-2ecf8",
  storageBucket: "web-app-2ecf8.firebasestorage.app",
  messagingSenderId: "1055799834120",
  appId: "1:1055799834120:web:7b0220058a18745d0283bd",
  measurementId: "G-GR1J4893XZ"
};

const app = initializeApp(firebaseConfig);
export const db  = getFirestore(app);
export { collection, addDoc, serverTimestamp };
