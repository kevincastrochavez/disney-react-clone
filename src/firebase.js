import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwErHPl9YLQsefkzYh3HSAjxe84GMH-Ow",
  authDomain: "disney-build-kc.firebaseapp.com",
  projectId: "disney-build-kc",
  storageBucket: "disney-build-kc.appspot.com",
  messagingSenderId: "1081929824574",
  appId: "1:1081929824574:web:fee386479f94b873ab146f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default firestore;
