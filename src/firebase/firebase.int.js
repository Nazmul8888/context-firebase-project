// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawFJzS18lZM2rN_yol5wQX2zl1-FVfqY",
  authDomain: "contex-firebase-project.firebaseapp.com",
  projectId: "contex-firebase-project",
  storageBucket: "contex-firebase-project.appspot.com",
  messagingSenderId: "211493361196",
  appId: "1:211493361196:web:ab12219a279932f38de389"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;