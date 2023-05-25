import { initializeApp, getApp } from "firebase/app";
import { getDatabase, set,ref } from "firebase/database";

let app

try{
   app = getApp()
} catch (error) {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        databaseURL: process.env.FIREBASE_DATABASEURL,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APPID 
    };
    
    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export { db, set, ref }