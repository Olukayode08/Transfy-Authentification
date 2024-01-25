import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: 'AIzaSyCees2-MkZojL_-gESpS-jVjQZWqVV7g7s',
  authDomain: 'trasfy-authentification.firebaseapp.com',
  projectId: 'trasfy-authentification',
  storageBucket: 'trasfy-authentification.appspot.com',
  messagingSenderId: '321858426382',
  appId: '1:321858426382:web:5a61f2081d8981dc400e5f',
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)


