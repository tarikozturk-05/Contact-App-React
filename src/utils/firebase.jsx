// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMgxD0vLi8GxAG-Ti6v1xM38db8j4R2hI",
  authDomain: "contact-firebase2.firebaseapp.com",
  databaseURL: "https://contact-firebase2-default-rtdb.firebaseio.com",
  projectId: "contact-firebase2",
  storageBucket: "contact-firebase2.appspot.com",
  messagingSenderId: "727352499947",
  appId: "1:727352499947:web:faa01adb23f42f005ea8ae"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase