import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBQJGKwAM_LE6cA92ty71wBvreemWjh-f8",
    authDomain: "mytodo-9ffe4.firebaseapp.com",
    projectId: "mytodo-9ffe4",
    storageBucket: "mytodo-9ffe4.appspot.com",
    messagingSenderId: "759344853670",
    appId: "1:759344853670:web:8bdd5fc3dc83231c8d3a67",
    measurementId: "G-TWH1M319PD"
  };
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore() ;
export {db}