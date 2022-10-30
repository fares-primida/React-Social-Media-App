// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD54YHObL4isqxeCFuIsaZnBOASVe4CynU",
    authDomain: "digicupid-app.firebaseapp.com",
    projectId: "digicupid-app",
    storageBucket: "digicupid-app.appspot.com",
    messagingSenderId: "740058570812",
    appId: "1:740058570812:web:f34d98df26f93ee64a6339"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
