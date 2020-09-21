import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC-zLjkpch045gWUMk11DZs-bJwHuLekUg",
    authDomain: "facebook-messenger-clone-8f446.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-8f446.firebaseio.com",
    projectId: "facebook-messenger-clone-8f446",
    storageBucket: "facebook-messenger-clone-8f446.appspot.com",
    messagingSenderId: "724144878753",
    appId: "1:724144878753:web:78e8ea8b6d7c3295d52ce0",
    measurementId: "G-DD5C1EPLP5"
});

const db = firebaseApp.firestore();

export default db;