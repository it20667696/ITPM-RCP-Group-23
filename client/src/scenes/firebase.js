import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
firebase.initializeApp({
  apiKey: "AIzaSyCFEtW8TNhpz-DEFDNWzE69wv6JPfLpUoo",
  authDomain: "foodiesweb-c2d6e.firebaseapp.com",
  projectId: "foodiesweb-c2d6e",
  storageBucket: "foodiesweb-c2d6e.appspot.com",
  messagingSenderId: "25909146567",
  appId: "1:25909146567:web:2c3362cbeff7d2092d9fe2",
});

const auth = firebase.auth();
const storage = firebase.storage();

export { storage, auth };
