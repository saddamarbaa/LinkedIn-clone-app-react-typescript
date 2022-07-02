import * as Yup from 'yup'

export const signupSchemaValidation = Yup.object().shape({
	name: Yup.string()
		.required('Name is required')
		.min(3, 'Name must be at least 3 characters')
		.max(10, 'Name must not exceed 10 characters'),
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
	confirmPassword: Yup.string()
		.required('Confirm Password is required')
		.oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
	imageUrl: Yup.string().url('Image Url must be a valid URL'),
})

export const LoginSchemaValidation = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Email is invalid'),
	password: Yup.string()
		.required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
	acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
})

export const RestPasswordSchemaValidation = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Email is invalid'),
})
