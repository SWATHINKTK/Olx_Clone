import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfyl4ICw5M4MtcmHBs3oRxYy81l0fHlpo",
  authDomain: "olxclone-8ee20.firebaseapp.com",
  projectId: "olxclone-8ee20",
  storageBucket: "olxclone-8ee20.appspot.com",
  messagingSenderId: "176027926241",
  appId: "1:176027926241:web:c56856b3de05d0b0fb01a0",
  measurementId: "G-B43RJS46PX"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);