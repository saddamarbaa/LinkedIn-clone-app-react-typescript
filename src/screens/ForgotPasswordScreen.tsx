import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FirebaseError } from 'firebase/app'
import { sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { auth } from '../config'
import { ForgotPasswordSchemaValidation } from '../utils/schemaValidation/auth'
import Button from '../components/UI/Button'
import CustomInput from '../components/UI/CustomInput'

interface ForgotPasswordFormType {
	email: string
}

export default function ForgotPasswordScreen() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ForgotPasswordFormType>({
		resolver: yupResolver(ForgotPasswordSchemaValidation),
	})

	// Handle forgot password form submission
	const handleForgotPassword: SubmitHandler<ForgotPasswordFormType> = async (
		data,
	) => {
		try {
			await sendPasswordResetEmail(auth, data.email)
			toast.success('Password reset email sent! Please check your inbox.')
		} catch (error: unknown) {
			const firebaseError = error as FirebaseError
			const errorMessage = firebaseError?.message
			toast.error(errorMessage || 'Failed to send password reset email.')
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
					onSubmit={handleSubmit(handleForgotPassword)}
					autoComplete="off">
					<h3 className="text-3xl font-medium">Forgot Password</h3>

					{/* Email Input */}
					<CustomInput
						label="Email"
						type="email"
						id="email"
						register={register}
						error={errors.email}
					/>

					<Button onClick={handleSubmit(handleForgotPassword)}>
						Send Reset Link
					</Button>
				</form>
			</div>
		</div>
	)
}
