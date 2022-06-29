import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGJlAR8ckFCHGcQChK0cDRyrRo7cBNYms",
    authDomain: "olxrt-9acbb.firebaseapp.com",
    projectId: "olxrt-9acbb",
    storageBucket: "olxrt-9acbb.appspot.com",
    messagingSenderId: "976414287427",
    appId: "1:976414287427:web:150f0f2dad54b7d3ff96f6",
    measurementId: "G-26MRRDZWZ6"
  };
 export default firebase.initializeApp(firebaseConfig)