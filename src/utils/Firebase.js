import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// const firebaseConfig = {
//   apiKey: 'AIzaSyCees2-MkZojL_-gESpS-jVjQZWqVV7g7s',
//   authDomain: 'trasfy-authentification.firebaseapp.com',
//   projectId: 'trasfy-authentification',
//   storageBucket: 'trasfy-authentification.appspot.com',
//   messagingSenderId: '321858426382',
//   appId: '1:321858426382:web:5a61f2081d8981dc400e5f',
// }

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
