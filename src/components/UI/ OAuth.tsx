import { useNavigate } from 'react-router'
import {
	auth,
	GoogleAuthProvider,
	googleProvider,
	signInWithPopup,
} from '../../config'
import GoogleButton from './GoogleButton'
import { FirebaseError } from 'firebase/app'
import { toast } from 'react-toastify'

export default function OAuth() {
	const navigate = useNavigate()

	const signInWithGoogleHandler = async () => {
		try {
			const result = await signInWithPopup(auth, googleProvider)

			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result)
			const token = credential?.accessToken
			const user = result?.user
			console.log(result, user)

			// check for the user
			navigate('/')
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Something went wrong with the registration')
		}
	}

	return <GoogleButton onClick={signInWithGoogleHandler} />
}
