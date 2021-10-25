import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";
import fbConfig from './firebase_config';


// Initialize Firebase
try {
  firebase.initializeApp(fbConfig);
  firebase.auth();
  firebase.functions();
  firebase.firestore();
  firebase.storage();
  if (window.location.hostname === "localhost") {
    console.log(
      "testing locally -- hitting local functions and firestore emulators"
    );
    firebase.functions().useEmulator("localhost", 5001);
    firebase.auth().useEmulator("http://localhost:9099");
    firebase.storage().useEmulator("localhost", 9199);
    firebase.firestore().settings({
      host: "localhost:8080",
      ssl: false,
    });
  }
  console.log("Firebase Initialized");
} catch (err) {
  // console.log(`err`, err);
  // console.log("Error Initializing Firebase");
}

export default firebase;
// export const firestore = firebase.firestore()
