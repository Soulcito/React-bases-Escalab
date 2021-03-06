
// Para versiones hasta la 8

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Para versiones desde la 9

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';

// SDK config, esto se debe cambiar por la config personal/ se debe crear cuenta en firebase

const config = {
  apiKey: "AIzaSyAyKVXxgvyUJ4WwM0nwl2Ni9m_sCsSk95M",
  authDomain: "react-escalab-1b799.firebaseapp.com",
  projectId: "react-escalab-1b799",
  storageBucket: "react-escalab-1b799.appspot.com",
  messagingSenderId: "845008951160",
  appId: "1:845008951160:web:73de12b0e1ed5b6b32da8d"
};

// Initialize Firebase
firebase.initializeApp(config);

// create profile document
export const createUserProfileDocument = async (userAuth, additionalData) => {
    
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // reference doc to specified path

    const snapShot = await userRef.get(); // object

    if ( !snapShot.exists ) {
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
       } catch (error) {
         console.log('error creating user', error.message);
       }
    }

    return userRef;
};

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;