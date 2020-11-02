import firebase from "firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { firebaseConfig } from "../../constant/firebase-config.constant";
import { User } from "../../models/user.model";

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

export function useAuth() {
  return useAuthState(firebase.auth()) as [User | null, boolean, any];
}
