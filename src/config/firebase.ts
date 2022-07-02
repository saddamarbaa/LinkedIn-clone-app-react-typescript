// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app'
import {
	updateProfile,
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAIN_SENDER_ID,
	appId: process.env.REACT_APP_APPID,
}

// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	auth,
	db,
	GoogleAuthProvider,
	googleProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
	updateProfile,
}
