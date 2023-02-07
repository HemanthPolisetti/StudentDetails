import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDlqAb8xRCYFDBnv9t5LCh8kB9PoT9DWXI",
  authDomain: "axial-psyche-338207.firebaseapp.com",
  projectId: "axial-psyche-338207",
  storageBucket: "axial-psyche-338207.appspot.com",
  messagingSenderId: "611297711943",
  appId: "1:611297711943:web:1d609a6e9e3fa619875e62",
  measurementId: "G-VFE7W5XLB4"
};

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth();
  export const db = getFirestore(app);