// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4S-PariMRpla7RZTAFfTSGB-xG27xJhM",
  authDomain: "homesweeter-react-app.firebaseapp.com",
  projectId: "homesweeter-react-app",
  storageBucket: "homesweeter-react-app.appspot.com",
  messagingSenderId: "785855631022",
  appId: "1:785855631022:web:1dae2ad5904f87a26e273f",
  measurementId: "G-VJ2886VK1N"
};

// Initialize Firebase
export const firebaseCon= initializeApp(firebaseConfig);


