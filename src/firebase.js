// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_TMDB_KEY,
  authDomain: "movie-list-438a3.firebaseapp.com",
  projectId: "movie-list-438a3",
  storageBucket: "movie-list-438a3.appspot.com",
  messagingSenderId: "129205652496",
  appId: "1:129205652496:web:c4d7e76800228328724e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);