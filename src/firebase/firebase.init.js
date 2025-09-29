import {getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
 const firebaseConfig = {
  apiKey: "AIzaSyC1lctS4nHByUqeIeHXHOvVzYiXfZ6o9Tg",
  authDomain: "assignment12-993b2.firebaseapp.com",
  projectId: "assignment12-993b2",
  storageBucket: "assignment12-993b2.firebasestorage.app",
  messagingSenderId: "943030488177",
  appId: "1:943030488177:web:fa75ebb1087262138a1fd0",
  measurementId: "G-VV08ML54ML"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

