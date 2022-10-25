// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbRQuz8T7x-KFy2K67beeGwObnhp9Doyw",
  authDomain: "coures-details-app.firebaseapp.com",
  projectId: "coures-details-app",
  storageBucket: "coures-details-app.appspot.com",
  messagingSenderId: "1094627921199",
  appId: "1:1094627921199:web:5f6a1221737fee84a7e5da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 