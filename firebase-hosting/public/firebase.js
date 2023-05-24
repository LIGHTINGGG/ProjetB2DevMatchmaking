 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
 import { getAuth} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
     apiKey: "AIzaSyBCdDUM56EUOeNl78RWsRHtx3heehXFDHQ",
     authDomain: "projetdevb2-33fb0.firebaseapp.com",
     projectId: "projetdevb2-33fb0",
     storageBucket: "projetdevb2-33fb0.appspot.com",
     messagingSenderId: "162833122359",
     appId: "1:162833122359:web:7e1d6651f58c5d4de26bb2",
     measurementId: "G-3NC8PPPQVN"
 };

 // init
 export const auth = getAuth();
 export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);