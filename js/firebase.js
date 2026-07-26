import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    increment
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDqMKA4ExG22OcNcmOZY9iz1A4JPwu30lI",
  authDomain: "site-2-0-cc3ca.firebaseapp.com",
  projectId: "site-2-0-cc3ca",
  storageBucket: "site-2-0-cc3ca.firebasestorage.app",
  messagingSenderId: "295586956295",
  appId: "1:295586956295:web:99c02a47c8b885136156a2"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ==========================
// CONTADOR DE VISITANTES
// ==========================
async function contarVisita() {

    const ref = doc(db, "site", "visitas");

    await setDoc(ref, {
        total: increment(1)
    }, {
        merge: true
    });

}

// ==========================
// MOSTRAR VISITANTES
// ==========================
async function mostrarVisitantes() {

    const ref = doc(db, "site", "visitas");
    const snap = await getDoc(ref);

    if (snap.exists()) {

        const contador = document.getElementById("visitantes");

        if (contador) {
            contador.textContent = snap.data().total;
        }

    }

}

// Executa as funções
contarVisita().then(() => {
    mostrarVisitantes();
});