import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC1QV58cJ8Ub57A1fNV9H5iUhQgRvyOJ7M",
  authDomain: "dieuvang-c5764.firebaseapp.com",
  projectId: "dieuvang-c5764",
  storageBucket: "dieuvang-c5764.appspot.com",
  messagingSenderId: "309765315269",
  appId: "1:309765315269:web:1648e4072129d03c972eac",
  measurementId: "G-W8XKWT3K98",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

