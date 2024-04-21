// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOpoYa-bMeijxpSu15LU7j29bWyj0UqtI",
  authDomain: "overseer-96d87.firebaseapp.com",
  projectId: "overseer-96d87",
  storageBucket: "overseer-96d87.appspot.com",
  messagingSenderId: "880293485808",
  appId: "1:880293485808:web:02279f940dbe14b0707635",
  measurementId: "G-R0L4E8RYLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = getFirestore(app);

// Get a list of cities from your database
async function getFriends(db) {
  const citiesCol = collection(db, 'Friend');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}