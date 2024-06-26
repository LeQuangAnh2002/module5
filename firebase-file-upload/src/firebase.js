// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgnXUNrfS5a4pah4WksQVlIMkbls4ui7w",
    authDomain: "api-firebase-8b735.firebaseapp.com",
    projectId: "api-firebase-8b735",
    storageBucket: "api-firebase-8b735.appspot.com",
    messagingSenderId: "639660473159",
    appId: "1:639660473159:web:3cc6439a59d0d5ae2cea62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);