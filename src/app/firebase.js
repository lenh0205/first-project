import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

// apiKey: "AIzaSyB_C-ZHUl87tRJhrJYuUk3FA76XR-Mxa44",
//   authDomain: "first-project-87da5.firebaseapp.com",
//   projectId: "first-project-87da5",
//   storageBucket: "first-project-87da5.appspot.com",
//   messagingSenderId: "611239168001",
//   appId: "1:611239168001:web:dc19eb196ec3568cf15800"