import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getStorage, ref } from "firebase/storage";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4h7qolYcWfyE_J6qICHG9cNFwySUaOs8",
    authDomain: "polar-ride.firebaseapp.com",
    projectId: "polar-ride",
    storageBucket: "polar-ride.appspot.com",
    messagingSenderId: "562428275099",
    appId: "1:562428275099:web:e615a3ca3eabf5e258993e",
    measurementId: "G-8JVPZC71T8"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

const storage = getStorage();
const storageRef = ref(storage);

export { db, auth, storageRef }