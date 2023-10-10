import { getAuth } from "firebase/auth"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAnCMsghEqVojZg1_H3E3c-MgFXxGls0cw",
  authDomain: "final-app-89906.firebaseapp.com",
  projectId: "final-app-89906",
  storageBucket: "final-app-89906.appspot.com",
  messagingSenderId: "317113332994",
  appId: "1:317113332994:web:06c8db75bc64aeb83afe1b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();