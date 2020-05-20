import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCOrQKzb_IQwRDdsGdSaibxiQJtsMAIz1s",
    authDomain: "crown-db-1211c.firebaseapp.com",
    databaseURL: "https://crown-db-1211c.firebaseio.com",
    projectId: "crown-db-1211c",
    storageBucket: "crown-db-1211c.appspot.com",
    messagingSenderId: "274612544741",
    appId: "1:274612544741:web:dd1c1d1330d992e032e00c",
    measurementId: "G-6858TDW2BW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;