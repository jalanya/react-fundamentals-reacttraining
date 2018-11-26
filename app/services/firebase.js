import firebase from 'firebase';

export const initializeFirebase = () => {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5RHFJC5K4kw7MSRziFJ-Ca-lk8rd6DTI",
    authDomain: "react-fundamentals-4dfae.firebaseapp.com",
    databaseURL: "https://react-fundamentals-4dfae.firebaseio.com",
    projectId: "react-fundamentals-4dfae",
    storageBucket: "react-fundamentals-4dfae.appspot.com",
    messagingSenderId: "1010068339237"
  };
  firebase.initializeApp(config);
}
