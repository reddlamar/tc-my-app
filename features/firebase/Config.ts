import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArIxY7Nc_YTZeWa-B_A3JXtnfDg7Q0yzE",
  authDomain: "techcourses-67ec1.firebaseapp.com",
  projectId: "techcourses-67ec1",
  storageBucket: "techcourses-67ec1.appspot.com",
  messagingSenderId: "1084752641368",
  appId: "1:1084752641368:web:7227cb4263eb0fcbc4b92d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseDB = getFirestore(app);

export const firebaseStorage = getStorage(app);
