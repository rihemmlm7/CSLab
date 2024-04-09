
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "cslab-15fa4.firebaseapp.com",
  projectId: "cslab-15fa4",
  storageBucket: "cslab-15fa4.appspot.com",
  messagingSenderId: "998561002608",
  appId: "1:998561002608:web:7d7685a8bf045753b070b5",
  measurementId: "G-GT26B125FY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);