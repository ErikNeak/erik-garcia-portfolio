import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// Tu configuración web de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCpD_NCnii1XTTBrC6mTMikfGAuI3GBwfA",
    authDomain: "futurx-7c319.firebaseapp.com",
    projectId: "futurx-7c319",
    storageBucket: "futurx-7c319.firebasestorage.app",
    messagingSenderId: "333522182161",
    appId: "1:333522182161:web:1a98ddccedb0d327e351b0",
    measurementId: "G-TTMN5XCH7N"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
