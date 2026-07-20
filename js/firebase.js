import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCIPvUb4XrK1-Rpuk_x-w7oKKMd1RRVnv0",
  authDomain: "sitekayque.firebaseapp.com",
  projectId: "sitekayque",
  storageBucket: "sitekayque.firebasestorage.app",
  messagingSenderId: "911845443827",
  appId: "1:911845443827:web:789bdf8a5a9858e8988f86"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


// CONTADOR DE VISITAS
async function contarVisita(){

    const ref = doc(db,"site","visitas");

    const snap = await getDoc(ref);

    let total;

    if(snap.exists()){

        total = snap.data().total + 1;

    }else{

        total = 1;

    }

    await setDoc(ref,{
        total: total
    });

    console.log("Visitantes:", total);

}


contarVisita();


// CONTADOR DE DOWNLOADS
window.baixar = async function(nome){

    const ref = doc(db,"downloads",nome);

    const snap = await getDoc(ref);


    if(snap.exists()){

        await setDoc(ref,{
            total: snap.data().total + 1
        });

    }else{

        await setDoc(ref,{
            total:1
        });

    }

    console.log("Download:", nome);

}