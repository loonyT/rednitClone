import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyBtg1aghZIuwW6pEkG4rQw8AckzvcL1ejo",
    authDomain: "rednit-clone.firebaseapp.com",
    databaseURL: "https://rednit-clone.firebaseio.com",
    projectId: "rednit-clone",
    storageBucket: "rednit-clone.appspot.com",
    messagingSenderId: "1090784151279",
    appId: "1:1090784151279:web:aac9a188f04033c7f3bd1a",
    measurementId: "G-MH2GSK5E14",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const database = firebaseApp.firestore(); 

  export default database; 

