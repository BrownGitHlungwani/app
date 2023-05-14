import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8oH7oNknbf4mIQe-QKaxmSviNnJBOzig",
  authDomain: "gadgetshub-f21e9.firebaseapp.com",
  projectId: "gadgetshub-f21e9",
  storageBucket: "gadgetshub-f21e9.appspot.com",
  messagingSenderId: "913545954076",
  appId: "1:913545954076:web:4f960096f342e269f1f0d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
export const auth = getAuth(app);
//
export const db = getFirestore(app);
