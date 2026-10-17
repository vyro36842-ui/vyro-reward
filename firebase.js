import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsm_-KZPtiUPF6yi_rlxS0TBMlV-9rscM",
  authDomain: "vyro-6012f.firebaseapp.com",
  projectId: "vyro-6012f",
  storageBucket: "vyro-6012f.firebasestorage.app",
  messagingSenderId: "193659877181",
  appId: "1:193659877181:web:e6113f1c79a93d125af754"
};

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
