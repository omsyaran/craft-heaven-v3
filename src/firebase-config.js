import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBE4YENtriHkVh5Gbucyy4ipINyIzR4RHk",
    authDomain: "crafthaven-om.firebaseapp.com",
    projectId: "crafthaven-om",
    storageBucket: "crafthaven-om.appspot.com",
    messagingSenderId: "882716555478",
    appId: "1:882716555478:web:0d22bf90b572b4cf4d7177",
    measurementId: "G-09BKG4H6KF"
};

const app = initializeApp(firebaseConfig); // set the connection  between firebase and the web app
export const auth = getAuth(app);
