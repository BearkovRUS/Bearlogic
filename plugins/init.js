 import firebase from 'firebase'
 import firestore from 'firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBQwNfvTFrQLWk_K-QF7Dv2UifuzPCgPXA",
    authDomain: "portfolio-31bef.firebaseapp.com",
    databaseURL: "https://portfolio-31bef.firebaseio.com",
    projectId: "portfolio-31bef",
    storageBucket: "portfolio-31bef.appspot.com",
    messagingSenderId: "648831496276",
    appId: "1:648831496276:web:a644769d0f595dee9d7dc1",
    measurementId: "G-DSHSC21NLX"
  };

  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ tunestampsInSnapshots: true })
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebaseApp.firestore()