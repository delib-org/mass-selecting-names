import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
	apiKey: 'AIzaSyD82XZxw9S90yrFl0PB5ibxy9MZv1GncH4',
	authDomain: 'mass-names.firebaseapp.com',
	databaseURL: 'https://mass-names.firebaseio.com',
	projectId: 'mass-names',
	storageBucket: 'mass-names.appspot.com',
	messagingSenderId: '990355098057',
	appId: '1:990355098057:web:af50ce9fd2aaf0d2e10018',
	measurementId: 'G-GW6NL7QXD5'
};

firebase.initializeApp(config);

const DB = firebase.firestore();

export default DB;
