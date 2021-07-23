import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBeR8AS-6MFrtv5eaLIPAQpIXkpOUEC9cI",
    authDomain: "keep-it-c4211.firebaseapp.com",
    projectId: "keep-it-c4211",
    storageBucket: "keep-it-c4211.appspot.com",
    messagingSenderId: "67758489431",
    appId: "1:67758489431:web:78324c18801fe421ee8812"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();