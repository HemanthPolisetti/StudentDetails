import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBsZWcLvRENPPlzwkvvF9TacmfuBpZCoVU",
    authDomain: "student-details-6960d.firebaseapp.com",
    projectId: "student-details-6960d",
    storageBucket: "student-details-6960d.appspot.com",
    messagingSenderId: "712732131194",
    appId: "1:712732131194:web:fd7c75990dabc4ebd1a0c3",
    measurementId: "G-ZPF954LZVM"
  };

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth() 