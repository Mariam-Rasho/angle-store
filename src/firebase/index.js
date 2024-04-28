// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSVm3wsXtMiqO9r7rtBWtf7QdJQROWL8w",
    authDomain: "storevue-ec419.firebaseapp.com",
    projectId: "storevue-ec419",
    storageBucket: "storevue-ec419.appspot.com",
    messagingSenderId: "819471730770",
    appId: "1:819471730770:web:990258103e334ba9f6778b"
};


// Initialize Firebase
// initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };