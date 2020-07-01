import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDrQHX2s9wc6n5sP3S-qweZsGuEfhLEJkQ",
    authDomain: "boutique-db-1c326.firebaseapp.com",
    databaseURL: "https://boutique-db-1c326.firebaseio.com",
    projectId: "boutique-db-1c326",
    storageBucket: "boutique-db-1c326.appspot.com",
    messagingSenderId: "900049826859",
    appId: "1:900049826859:web:cce96036deb8eaefeda66e",
    measurementId: "G-PXFPJ2WLK3"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider  = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;