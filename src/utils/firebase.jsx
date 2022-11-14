// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDi_XyXiE_7Kpa4-gZy0YNvg6MH7_4fOb8",
  authDomain: "contact-app-116c6.firebaseapp.com",
  databaseURL: "https://contact-app-116c6-default-rtdb.firebaseio.com",
  projectId: "contact-app-116c6",
  storageBucket: "contact-app-116c6.appspot.com",
  messagingSenderId: "861635337775",
  appId: "1:861635337775:web:cf44bce04f4a076d1c70da"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase