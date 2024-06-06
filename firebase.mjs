// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRKTn6Q4ESkmL9KNF-4Rio-naczutKyXg",
  authDomain: "web-app-madaris-online-69bb9.firebaseapp.com",
  projectId: "web-app-madaris-online-69bb9",
  storageBucket: "web-app-madaris-online-69bb9.appspot.com",
  messagingSenderId: "548545245328",
  appId: "1:548545245328:web:b4cc4c82313115a35e6815"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
