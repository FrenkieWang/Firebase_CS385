// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDEuBKX4iY3T4CEGmxAALzGl4AMLyOC2GI",
  authDomain: "pallet2023-c5df9.firebaseapp.com",
  projectId: "pallet2023-c5df9",
  storageBucket: "pallet2023-c5df9.appspot.com",
  messagingSenderId: "925087154703",
  appId: "1:925087154703:web:50620860e294f5e7e2997a",
  measurementId: "G-DQSMDEZGW6"
 // you will need to generate this within Firebase yourself. 
};


let firebaseApp;
try {
  firebaseApp = getApp();
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
}

// const db = getFirestore(firebaseApp, {});
const db = initializeFirestore(firebaseApp,  
  {
      experimentalForceLongPolling : true
  });

export { db, firebaseApp };
