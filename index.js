// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsP6kNtOkocbWgPVEtfJ_gPoQGKuNOig8",
  authDomain: "biteofjoy-222e1.firebaseapp.com",
  projectId: "biteofjoy-222e1",
  storageBucket: "biteofjoy-222e1.firebasestorage.app",
  messagingSenderId: "247175159370",
  appId: "1:247175159370:web:39e0c0069efedc4d4150b3",
  measurementId: "G-VWGLYMZTNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);