import { Link, useNavigate } from 'react-router'
import { signupSchemaValidation } from '../utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { AuthRequestType } from '../types'
import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../components/UI/Button'
import { SlArrowRight } from 'react-icons/sl'
import CustomInput from '../components/UI/CustomInput'
import {
	auth,
	createUserWithEmailAndPassword,
	// signInWithEmailAndPassword,
	updateProfile,
} from '../config'
import { FirebaseError } from 'firebase/app'
import OAuth from '../components/UI/ OAuth'
import { toast } from 'react-toastify'

export default function SignUpScreen() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		// reset,
		formState: { errors },
	} = useForm<AuthRequestType>({
		resolver: yupResolver(signupSchemaValidation),
	})

	//  Function to Create User with given name and password
	const signInWithEmailAndPasswordHandler: SubmitHandler<
		AuthRequestType
	> = async (data) => {
		console.log(JSON.stringify(data, null, 2))
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			)

			if (auth?.currentUser) {
				updateProfile(auth?.currentUser, {
					displayName: data?.name,
					photoURL: data?.imageUrl || '/images/linkedin-b.png',
				})
			}
			// const user = userCredential?.user
			console.log('Signed in', userCredential)

			// Add the user to db
			toast.success('Sign up was successful')
			navigate('/login')
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			// const errorCode = firebaseError?.code
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Something went wrong with the registration')
		}
	}

	return (
		<div className="text-base p-[5%] text-center">
			<div>
				<img
					className="w-[150px] md:w-[210px] mx-auto h-[150px] object-contain"
					src="/images/LinkedIn-Logo.wine.png"
					alt="logo"
				/>
				<form
					className="overflow-hidden rounded bg-white shadow-lg max-w-xl mx-auto p-5 dark:bg-customBlack-700 mt-6 flex flex-col gap-8"
					autoComplete="off"
					onSubmit={(even) => even.preventDefault()}>
					<h3 className="text-3xl font-medium">Sign-Up</h3>

					{/* Name Input */}
					<CustomInput
						label="Name"
						type="text"
						id="name"
						register={register}
						error={errors.name}
					/>

					{/* Email Input */}
					<CustomInput
						label="Email"
						type="email"
						id="email"
						register={register}
						error={errors.email}
					/>

					{/* Password Input */}
					<CustomInput
						label="Password"
						type="password"
						id="password"
						register={register}
						error={errors.password}
					/>

					{/* Confirm Password Input */}
					<CustomInput
						label="Confirm Password"
						type="password"
						id="confirmPassword"
						register={register}
						error={errors.confirmPassword}
					/>

					{/* Profile Image URL Input */}
					<CustomInput
						label="Profile Image URL (optional)"
						type="text"
						id="imageUrl"
						register={register}
						error={errors.imageUrl}
					/>

					<Button onClick={handleSubmit(signInWithEmailAndPasswordHandler)}>
						Agree & Join
					</Button>

					<div>
						<p className="text-sm">
							By clicking Agree & Join, you agree to the LinkedIn (Saddam)
							<span className="text-customBlue-950 hover:underline transition dark:text-white">
								{' '}
								User Agreement{' '}
							</span>
							<span className="text-customBlue-950 hover:underline transition dark:text-white">
								Privacy Policy,{' '}
							</span>
							and{' '}
							<span className="text-customBlue-950 hover:underline transition dark:text-white">
								Cookie Policy.
							</span>
						</p>

						<div className="flex items-center mt-5 gap-4">
							<div className="h-[1px] bg-gray-500 flex-grow"></div>
							<p className=" text-gray-500 dark:text-white">Or</p>
							<div className="h-[1px] bg-gray-500 flex-grow"></div>
						</div>
					</div>

					<OAuth />

					<p className="text-base flex items-center justify-center mt-2">
						Already on LinkedIn?&nbsp;
						<Link to={'/login'}>
							<span className="text-customBlue-950 hover:underline transition dark:text-white font-bold">
								Sign-In
							</span>
						</Link>
						<span className="cursor-pointer">
							<SlArrowRight className="text-customBlue-950 hover:underline text-base transition dark:text-white font-bold ml-4 cursor-pointer" />
						</span>
					</p>
				</form>
			</div>
		</div>
	)
}
