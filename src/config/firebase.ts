import { getApps, initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const googleProvider = new GoogleAuthProvider()

const firebaseConfig = {
	apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
	storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAIN_SENDER_ID,
	appId: import.meta.env.VITE_REACT_APP_APPID,

	// apiKey: 'AIzaSyDQJJ5Nl0dAo3QyXm-BguyWHTBreAvmJNU',
	// authDomain: 'linkedin-clone-app-saddam.firebaseapp.com',
	// projectId: 'linkedin-clone-app-saddam',
	// storageBucket: 'linkedin-clone-app-saddam.firebasestorage.app',
	// messagingSenderId: '860406937340',
	// appId: '1:860406937340:web:03f7c6634a6773d210c979',
}

// Initialize Firebase
// Initialize Firebase
const app = getApps().length > 0 ? getApps() : initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export {
	app,
	auth,
	createUserWithEmailAndPassword,
	db,
	getAuth,
	GoogleAuthProvider,
	googleProvider,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
}
