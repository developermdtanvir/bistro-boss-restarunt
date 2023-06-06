import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyB0liRSh7psg0Wz3hofuyDGzUVCixx1ahc",
    authDomain: "bistro-boss-restraurent.firebaseapp.com",
    projectId: "bistro-boss-restraurent",
    storageBucket: "bistro-boss-restraurent.appspot.com",
    messagingSenderId: "112613714633",
    appId: "1:112613714633:web:ff668244b57156a7253b18"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);