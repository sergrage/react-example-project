import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.FIREBASE_API_KEY,
  apiKey: 'AIzaSyAYlIi_cC4lpJJ5OB851qpZq_ZtlFyduBo',
  authDomain: 'react-example-project-95bc7.firebaseapp.com',
  projectId: 'react-example-project-95bc7',
  storageBucket: 'react-example-project-95bc7.appspot.com',
  messagingSenderId: '985302596261',
  appId: '1:985302596261:web:1081bcc321882dbcf1eb4c',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const auth = getAuth(app);

const db = getFirestore(app)

export default {db, auth }
