// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app')
const { getAuth, onAuthStateChanged } = require('firebase/auth')
const { getFirestore, collection, getDoc, getDocs } = require('firebase/firestore')

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp()

const auth = getAuth(firebaseApp)
// const db = getFirestore(firebaseApp)
// db.collection('otps').getDocs()
// const otps = collection(db, 'otps')
// const snapshot = await getDocs(otps)

// detect auth state

