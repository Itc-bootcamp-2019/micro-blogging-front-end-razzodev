import { firebaseConfig } from "../config/firebaseConfig";
import * as firebase from "firebase";
// import { firestore } from "firebase";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });
export const dbCollection = db.collection("tweets");
