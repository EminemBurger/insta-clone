// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvapATijldvGpIbaFRT73k8NHTWlD2bJg",
  authDomain: "insta-2-yt-d5707.firebaseapp.com",
  projectId: "insta-2-yt-d5707",
  storageBucket: "insta-2-yt-d5707.appspot.com",
  messagingSenderId: "148423602289",
  appId: "1:148423602289:web:494da06e2f048a02f8ebd0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };