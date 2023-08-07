import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY ,
//   authDomain:import.meta.env.VITE_AUTH ,
//   projectId:import.meta.env.VITE_PROJECT ,
//   storageBucket:import.meta.env.VITE_SOTORAGEBUCKET ,
//   messagingSenderId: import.meta.env.VITE_MESSAGING,
//   appId:import.meta.env.VITE_APPID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCf3Gy9Cw06EBGhYmqLVmDjbk9pnqE37W4",
  authDomain: "ecommerce-566e0.firebaseapp.com",
  projectId: "ecommerce-566e0",
  storageBucket: "ecommerce-566e0.appspot.com",
  messagingSenderId: "616815970518",
  appId: "1:616815970518:web:9a3d0434c3fad40e2c2177"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)


