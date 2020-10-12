import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDfUQfkDrrgOA-UEP7yi3HsyE_US0JzsZ4",
    authDomain: "soliu-69a78.firebaseapp.com",
    databaseURL: "https://soliu-69a78.firebaseio.com",
    projectId: "soliu-69a78",
    storageBucket: "soliu-69a78.appspot.com",
    messagingSenderId: "1033753600224",
    appId: "1:1033753600224:web:5a7486320bd97d6304f085",
    measurementId: "G-6H5F6491JJ"
  };

  firebase.initializeApp(firebaseConfig);
  
  export default firebase