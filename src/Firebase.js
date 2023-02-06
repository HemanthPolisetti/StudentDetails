import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBCFBO86OYWLTrJpBSUyf_xHg8JBQocOqU",
  authDomain: "company-details-f3d8c.firebaseapp.com",
  projectId: "company-details-f3d8c",
  storageBucket: "company-details-f3d8c.appspot.com",
  messagingSenderId: "568990061065",
  appId: "1:568990061065:web:ca4b4459b03e69da8cded8",
  measurementId: "G-MDTP66F3LW"
};

  const app = initializeApp(firebaseConfig);
  export const auth=getAuth();
  export const db = getFirestore(app);