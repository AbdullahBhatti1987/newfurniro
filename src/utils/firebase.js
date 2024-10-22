
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBXREZcqxL_hoh5Ns5jJemKXZ4NNx433NU",
    authDomain: "furniroonreact.firebaseapp.com",
    databaseURL: "https://furniroonreact-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "furniroonreact",
    storageBucket: "furniroonreact.appspot.com",
    messagingSenderId: "1075196865994",
    appId: "1:1075196865994:web:0c5dc2d08ef8e2d03cf333",
    measurementId: "G-2P9QFMDKDF"
  };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);






export {auth, db, storage }