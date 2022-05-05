// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBNDNLDymVba1iqjfR0g1x6nZ8qBC1oqA8",
    authDomain: "assignment-615db.firebaseapp.com",
    projectId: "assignment-615db",
    storageBucket: "assignment-615db.appspot.com",
    messagingSenderId: "192304805094",
    appId: "1:192304805094:web:87444401f7f6989d8fb727",
    measurementId: "G-R08354S47J",
};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
