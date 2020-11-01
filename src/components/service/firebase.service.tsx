import firebase from "firebase";
import { firebaseConfig } from "../../constant/firebase-config.constant";

export function initializeFirebase() {
  firebase.initializeApp(firebaseConfig);
}

const _loginProvider = new firebase.auth.GoogleAuthProvider();

export function loginProvider() {
  return _loginProvider;
}

export function signIn() {
  return firebase.auth().signInWithPopup(loginProvider());
}

export function signOut() {
  return firebase.auth().signOut();
}
