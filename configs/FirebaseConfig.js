// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0pwyYY0sm1Gm-wCMFKKocxiTT-qYu9ZE",
  authDomain: "bdirectory-ce792.firebaseapp.com",
  projectId: "bdirectory-ce792",
  storageBucket: "bdirectory-ce792.appspot.com",
  messagingSenderId: "143019693742",
  appId: "1:143019693742:web:d6d93e52fa59746770ff3f",
  measurementId: "G-TKPN8E9SZN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);