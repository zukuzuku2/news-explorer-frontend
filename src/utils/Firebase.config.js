// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyB2eFWA6H1OYXoEVZjq2zKtzhT9Mo1VmrE",
  authDomain: "finalprojectpracticum.firebaseapp.com",
  projectId: "finalprojectpracticum",
  storageBucket: "finalprojectpracticum.appspot.com",
  messagingSenderId: "1057125351897",
  appId: "1:1057125351897:web:f885486853faf8c04459c8",
  measurementId: "G-5J24RYGQRB",
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
