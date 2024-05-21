// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9T37Woc_6u-KV2jLJwwAIDke_LL6iATk",
  authDomain: "clone-552b1.firebaseapp.com",
  projectId: "clone-552b1",
  storageBucket: "clone-552b1.appspot.com",
  messagingSenderId: "277135758617",
  appId: "1:277135758617:web:85fd217e8c8183c980e188",
  measurementId: "G-9T2RXSWRG1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
