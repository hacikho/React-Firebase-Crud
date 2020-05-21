import * as firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDGg4zOGnbphUIpavhVn3AE9GI9sFvuvk4",
    authDomain: "reactcrud-45737.firebaseapp.com",
    databaseURL: "https://reactcrud-45737.firebaseio.com",
    projectId: "reactcrud-45737",
    storageBucket: "reactcrud-45737.appspot.com",
    messagingSenderId: "1021379928940",
    appId: "1:1021379928940:web:61ecb4c6f4bdf664fac949",
    measurementId: "G-KRQ1YWSLWB"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fireDb.database().ref();