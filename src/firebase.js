import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxfGSndr-VLFff-t2fO0y8PWNjpAoiitI",
  authDomain: "image-management-app.firebaseapp.com",
  projectId: "image-management-app",
  storageBucket: "image-management-app.appspot.com",
  messagingSenderId: "524295205465",
  appId: "1:524295205465:web:520547711eb98c4d4ff748",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
