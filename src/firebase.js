import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEdC3OpMzBvSpVUKtA0zrdWWXGkh57fts",
    authDomain: "clone-a1b91.firebaseapp.com",
    projectId: "clone-a1b91",
    storageBucket: "clone-a1b91.appspot.com",
    messagingSenderId: "275804438492",
    appId: "1:275804438492:web:f6afc23859548963f31919",
    measurementId: "G-XT80SV3B7R"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider}