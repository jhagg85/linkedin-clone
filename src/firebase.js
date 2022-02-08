import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAiemo-b6SXTSRy_UIIrxnbhBZo2CzUUHY",
  authDomain: "linkedin-clone-85860.firebaseapp.com",
  projectId: "linkedin-clone-85860",
  storageBucket: "linkedin-clone-85860.appspot.com",
  messagingSenderId: "24944267705",
  appId: "1:24944267705:web:6a476d2e77b2ef1c60a668",
  measurementId: "G-87X1MDYRPX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
