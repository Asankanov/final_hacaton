// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9KQyQFpOSypSFZJPZaKT1TfNgBo6BGT0",
  authDomain: "zbs-nouty.firebaseapp.com",
  projectId: "zbs-nouty",
  storageBucket: "zbs-nouty.appspot.com",
  messagingSenderId: "77774038105",
  appId: "1:77774038105:web:884fe875d3ae9be511bd48",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
