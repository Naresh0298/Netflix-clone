import firebase from 'firebase'



const firebaseConfig = {
    apiKey: "AIzaSyB2-9jd91tM64LDIH-e65PtIZ3GAa7PB5g",
    authDomain: "netflix-clone-80544.firebaseapp.com",
    projectId: "netflix-clone-80544",
    storageBucket: "netflix-clone-80544.appspot.com",
    messagingSenderId: "811443232117",
    appId: "1:811443232117:web:8d9f3222178678be9cc73c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db;
  