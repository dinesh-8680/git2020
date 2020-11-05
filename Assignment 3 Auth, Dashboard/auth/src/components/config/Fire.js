import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBSt4DB_uP8IAkdgN7uCozXdx8OG546Qz8",
    authDomain: "auth-67f1a.firebaseapp.com",
    databaseURL: "https://auth-67f1a.firebaseio.com",
    projectId: "auth-67f1a",
    storageBucket: "auth-67f1a.appspot.com",
    messagingSenderId: "570693292952",
    appId: "1:570693292952:web:97e435c4f30dd7184311ed"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;