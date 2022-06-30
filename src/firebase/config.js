import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCK0EwWS89tJE1l_4xmi1FiPuvBHqtoge0",
  authDomain: "full-vicio.firebaseapp.com",
  projectId: "full-vicio",
  storageBucket: "full-vicio.appspot.com",
  messagingSenderId: "1078845739165",
  appId: "1:1078845739165:web:63e9697fc58309e8420474"
};

const app = initializeApp(firebaseConfig);

export const get_firestore_app = () => {
    return app;
};