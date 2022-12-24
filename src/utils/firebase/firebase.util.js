import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4jLJ9hytYSsK2r9eJRKijhVNeUL3KjSc",
  authDomain: "crwon-clothing-db-7608e.firebaseapp.com",
  projectId: "crwon-clothing-db-7608e",
  storageBucket: "crwon-clothing-db-7608e.appspot.com",
  messagingSenderId: "915638813457",
  appId: "1:915638813457:web:0e41946e20abcd860e42b0",
};

const FirabaseApp = initializeApp(firebaseConfig);
const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, GoogleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error craeting the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};
