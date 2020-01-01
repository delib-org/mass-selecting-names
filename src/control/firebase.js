// import firebase from 'firebase/app';
// import 'firebase/firestore';

const config = {
	apiKey: "AIzaSyBEumZUTCL3Jc9pt7_CjiSVTxmz9aMqSvo",
  authDomain: "synthesistalyaron.firebaseapp.com",
  databaseURL: "https://synthesistalyaron.firebaseio.com",
  projectId: "synthesistalyaron",
  storageBucket: "synthesistalyaron.appspot.com",
  messagingSenderId: "799655218679",
  appId: "1:799655218679:web:d128d57a684353f7b9b2f2"

};

window.firebase.initializeApp(config);


const DB = window.firebase.firestore();

export default DB;
