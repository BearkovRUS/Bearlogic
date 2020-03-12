import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyATYCIXfQA4b2GRtvhPf1IhAZi5ucs6HXY",
  authDomain: "bears-app-a8969.firebaseapp.com",
  databaseURL: "https://bears-app-a8969.firebaseio.com",
  projectId: "bears-app-a8969",
  storageBucket: "bears-app-a8969.appspot.com",
  messagingSenderId: "114555966074",
  appId: "1:114555966074:web:571b100d6bedeca01ca1c3",
  measurementId: "G-2HEM5RQRS7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore()

