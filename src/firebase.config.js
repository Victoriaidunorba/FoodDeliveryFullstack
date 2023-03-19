import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBAlfBVk91DTS-RBCkuuJ3z5zGrF94ISYY",
    authDomain: "resturant-1cd00.firebaseapp.com",
    databaseURL: "https://resturant-1cd00-default-rtdb.firebaseio.com",
    projectId: "resturant-1cd00",
    storageBucket: "resturant-1cd00.appspot.com",
    messagingSenderId: "291907344587",
    appId: "1:291907344587:web:83e4f9cb781de99b2be34e"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app)

  export {app, firestore, storage};
