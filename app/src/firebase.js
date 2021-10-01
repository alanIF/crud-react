// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSW0oQvDl-IE-mjNiFWBMduO6gGKfFO44",
  authDomain: "crud-paciente-ef19b.firebaseapp.com",
  databaseURL: "https://crud-paciente-ef19b-default-rtdb.firebaseio.com",
  projectId: "crud-paciente-ef19b",
  storageBucket: "crud-paciente-ef19b.appspot.com",
  messagingSenderId: "830372272995",
  appId: "1:830372272995:web:9f70d484c128127f079156"
};

// Initialize Firebase
const fireDb = initializeApp(firebaseConfig);

export default fireDb;