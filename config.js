import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDe-jaZhxVO52G2jrBWUNNxx88SMmJ0ea0",
    authDomain: "proc71-d3790.firebaseapp.com",
    projectId: "proc71-d3790",
    storageBucket: "proc71-d3790.appspot.com",
    messagingSenderId: "921138208958",
    appId: "1:921138208958:web:2403330eee5b7bcce73eef"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
