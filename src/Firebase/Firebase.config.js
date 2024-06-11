// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIM2aHV_ZAfDVMnmIGrHDQh-quJs81plk",
  authDomain: "the-dragon-news-project-b6d8b.firebaseapp.com",
  projectId: "the-dragon-news-project-b6d8b",
  storageBucket: "the-dragon-news-project-b6d8b.appspot.com",
  messagingSenderId: "857683040337",
  appId: "1:857683040337:web:737207716a298e8cb84070"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export default app;