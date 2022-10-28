// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAztMryXk2DU9pKrV6J7QuM3PupZngwc4Q",
    authDomain: "social-app-86847.firebaseapp.com",
    projectId: "social-app-86847",
    storageBucket: "social-app-86847.appspot.com",
    messagingSenderId: "793355704302",
    appId: "1:793355704302:web:4ea877876055909e85e0ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)