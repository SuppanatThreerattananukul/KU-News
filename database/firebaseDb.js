import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyBCQjaaNRzgFZ9kh5R3OkzO4Caett8iZR8",
    authDomain: "ai-kubet-dev-a5f91.firebaseapp.com",
    databaseURL: "https://ai-kubet-dev-a5f91-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ai-kubet-dev-a5f91",
    storageBucket: "ai-kubet-dev-a5f91.appspot.com",
    messagingSenderId: "1081403083562",
    appId: "1:1081403083562:web:d94938a8bdaec1a0796c53",
    measurementId: "G-TZL424WYFD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()
export default firebase;