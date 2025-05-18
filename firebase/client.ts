// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5itWz0l_H5r1JznEVrw6-w3LdRKf8xCk",
  authDomain: "audibly-d2346.firebaseapp.com",
  projectId: "audibly-d2346",
  storageBucket: "audibly-d2346.firebasestorage.app",
  messagingSenderId: "511373004975",
  appId: "1:511373004975:web:f7af338865f6cdc93b845a",
  measurementId: "G-CLGKMLVBV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);