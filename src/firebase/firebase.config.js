// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDluvxPyEA3D3vA15xP--uGb4JAmOab2dw",
  authDomain: "hot-coffee-store.firebaseapp.com",
  projectId: "hot-coffee-store",
  storageBucket: "hot-coffee-store.appspot.com",
  messagingSenderId: "7703402438",
  appId: "1:7703402438:web:216242880b39515e1584c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;