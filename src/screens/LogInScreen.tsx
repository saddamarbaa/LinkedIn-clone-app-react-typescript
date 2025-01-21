import { Link, useNavigate } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SlArrowRight } from 'react-icons/sl'
import { FirebaseError } from 'firebase/app'
import { toast } from 'react-toastify'
import Button from '../components/UI/Button'
import { LoginSchemaValidation } from '../utils/schemaValidation/auth'
import CustomInput from '../components/UI/CustomInput'
import { auth, signInWithEmailAndPassword } from '../config'
import OAuth from '../components/UI/ OAuth'
import { AuthLoginRequestType } from '../types'

export default function LogInScreen() {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthLoginRequestType>({
		resolver: yupResolver(LoginSchemaValidation),
	})

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler: SubmitHandler<
		AuthLoginRequestType
	> = async (data) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				data.email,
				data.password,
			)
			if (userCredential.user) {
				navigate('/')
			}
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Bad user credentials')
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
					<h3 className="text-3xl font-medium">Sign-In</h3>

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

					{/* Forgot Password Link */}
					<div className="text-right">
						<Link
							to="/forgotpassword"
							className="text-customBlue-950 hover:underline transition dark:text-white text-sm font-bold">
							Forgot Password?
						</Link>
					</div>

					<Button
						onClick={handleSubmit(registerUserWithEmailAndPasswordHandler)}>
						Sign-In
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
						Create your LinkedIn account &nbsp;
						<Link to={'/register'}>
							<span className="text-customBlue-950 hover:underline transition dark:text-white font-bold">
								Register
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
