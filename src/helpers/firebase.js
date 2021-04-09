import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

export const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAo7kL5ZjsFAR4iH5g0VLLqx-dHKRJHbmc",
    authDomain: "admin-panel-2e6f9.firebaseapp.com",
    databaseURL: "https://admin-panel-2e6f9.firebaseio.com",
    projectId: "admin-panel-2e6f9",
    storageBucket: "admin-panel-2e6f9.appspot.com",
    messagingSenderId: "734020905657"
});