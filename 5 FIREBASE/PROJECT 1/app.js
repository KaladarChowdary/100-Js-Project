import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl20CukwbVzlY4ILxXheyetA-AaX6YqSs",
  authDomain: "project-1-b5bfb.firebaseapp.com",
  projectId: "project-1-b5bfb",
  storageBucket: "project-1-b5bfb.appspot.com",
  messagingSenderId: "237712989021",
  appId: "1:237712989021:web:1114f0f040e42598b6a6b4",
  measurementId: "G-R4DWGRDEP9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeData() {
  app
    .database()
    .ref("user")
    .set({
      name: document.getElementById("nameField").value,
      age: document.getElementById("ageField").value,
    });
}

document.getElementById("btn").onclick(writeData);
