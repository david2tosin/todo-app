// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsJOY0dbyAzO3a69HCPAtGmyjbnpJWCW0",
  authDomain: "todo-app-c3488.firebaseapp.com",
  projectId: "todo-app-c3488",
  storageBucket: "todo-app-c3488.appspot.com",
  messagingSenderId: "645369504943",
  appId: "1:645369504943:web:9e2bd4a79bb3933d00605a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
