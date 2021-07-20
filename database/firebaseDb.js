import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyBrabdxmLofbkHd_udyXIpgiIoZrFnjBhs",
    authDomain: "sut-join.firebaseapp.com",
    databaseURL: "https://sut-join.firebaseio.com",
    projectId: "sut-join",
    storageBucket: "sut-join.appspot.com",
    messagingSenderId: "535754743778",
    appId: "1:535754743778:web:10f39c02d07646bee0a3bb",
    measurementId: "G-H9WN304R3Q"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings(settings);
export default firebase;