import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUbSp2y7H66_kTVBDzmzqv3Z2-nLHtAGo",
  authDomain: "collateral-coders.firebaseapp.com",
  projectId: "collateral-coders",
  storageBucket: "collateral-coders.appspot.com",
  messagingSenderId: "969896913054",
  appId: "1:969896913054:web:1e8e0cf1e6e8e02b69738f",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  console.log(userAuth);

  const userDocRef = doc(db, "User", userAuth.uid); // db/User/uid

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //{email,ss}
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};

export const makeUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
