// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD76rfDUx0gRFDhNrykpCzHjCkYRWh7DdQ',
    authDomain: 'ewerson-af883.firebaseapp.com',
    projectId: 'ewerson-af883',
    storageBucket: 'ewerson-af883.appspot.com',
    messagingSenderId: '806037541542',
    appId: '1:806037541542:web:caf7bfb72f7e6084e7da67',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
