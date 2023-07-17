// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAvmYyrLCmunT41dfwJXYcI2XKD0PRPNgw",
  authDomain: "socialbuzz-images.firebaseapp.com",
  projectId: "socialbuzz-images",
  storageBucket: "socialbuzz-images.appspot.com",
  messagingSenderId: "191332868938",
  appId: "1:191332868938:web:d99e6adc8bde657e5997b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)