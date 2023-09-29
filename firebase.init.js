// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJvOcnK623TPG8CXOsM9OPy-fhqVtMl1k",
  authDomain: "fir-data-a91f0.firebaseapp.com",
  projectId: "fir-data-a91f0",
  storageBucket: "fir-data-a91f0.appspot.com",
  messagingSenderId: "313103484356",
  appId: "1:313103484356:web:5ca8cb34bac808a23ad091",
  measurementId: "G-ZBPW8XQHXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
