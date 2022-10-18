// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1fWF8zSU9Q8PAaFWxe-cC9DMfBL8jde4",
  authDomain: "signup-form-30957.firebaseapp.com",
  projectId: "signup-form-30957",
  storageBucket: "signup-form-30957.appspot.com",
  messagingSenderId: "759767552880",
  appId: "1:759767552880:web:bee7da0f74f0cb398bb5b5",
  measurementId: "G-GK7RX8KPR7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
