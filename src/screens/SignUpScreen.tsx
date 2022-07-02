import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import React, { memo, useEffect, useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { signupSchemaValidation } from '../utils'
import {
	auth,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	googleProvider,
	signInWithPopup,
	updateProfile,
} from '../config/firebase'
import LogInScreen from './LogInScreen'
import { AuthRequestType } from '../types'

const SignUpScreen = () => {
	const [logIn, setLogIn] = useState<boolean>(false)
	const history = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<AuthRequestType>({
		resolver: yupResolver(signupSchemaValidation),
	})

	useEffect(() => {
		const redirectTologInPage = () => {
			if (logIn) {
				return <LogInScreen />
			}
		}

		redirectTologInPage()
	}, [logIn])

	if (logIn) {
		return <LogInScreen />
	}

	//  Function to Create User with given name and password
	const registerUserWithEmailAndPasswordHandler = (data: AuthRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		createUserWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user

				console.log('Signed in', userCredential)

				// Update Profile
				updateProfile(user, {
					displayName: data?.name,
					photoURL: data?.imageUrl || '/images/linkedin-b.png',
				})
					.then(function () {
						// Update successful.
						console.log('User Profile Updated Successfully')
						// Redirect to login
						history('/login')
					})
					.catch(function (error: { code: any; message: any }) {
						// An error happened.
						const errorCode = error.code
						const errorMessage = error.message
						alert(errorMessage)
					})
			})
			.catch((error) => {
				// An error happened.
				const errorCode = error.code
				const errorMessage = error.message
				alert(errorMessage)
			})
	}

	const signInWithGoogleHandler = (event: { preventDefault: () => void }) => {
		event.preventDefault()
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result)
				const token = credential?.accessToken
				// The signed-in user info.
				const user = result.user
				// console.log(
				// 	result,
				// 	user.displayName,
				// 	user.photoURL,
				// 	user.email,
				// 	user.uid,
				// )
				history('/')
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message
				// The email of the user's account used.
				const email = error.customData.email
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error)
				alert(errorMessage)
			})
	}

	return (
		<LogInWrapper>
			<Container>
				<Link to="/">
					<img
						className="login__logo"
						src="/images/LinkedIn-Logo.wine.png"
						alt="logo"
					/>
				</Link>
				<div className="title">Make the most of your professional life</div>
				<FormWrapper>
					<form autoComplete="off">
						<Title> </Title>
						<div className="control">
							<label className={errors.name ? 'error' : ''} htmlFor="name">
								{errors.name ? errors.name?.message : '	Your name'}
							</label>
							<input
								className={` ${
									errors.name ? 'is-invalid' : 'input custom-input'
								}`}
								type="text"
								id="name"
								{...register('name')}
							/>
						</div>
						<div className="control">
							<label className={errors.email ? 'error' : ''} htmlFor="email">
								{errors.email ? errors.email?.message : 'Email'}
							</label>
							<input
								className={` ${
									errors.email ? 'is-invalid' : 'input custom-input'
								}`}
								type="email"
								id="email"
								autoComplete="email"
								{...register('email')}
							/>
						</div>

						<div className="control">
							<label
								className={errors.password ? 'error' : ''}
								htmlFor="password">
								{errors.password ? errors.password?.message : '	Password'}
							</label>
							<input
								className={` ${
									errors.password ? 'is-invalid' : 'input custom-input'
								}`}
								type="password"
								id="password"
								{...register('password')}
							/>
						</div>

						<div className="control">
							<label
								className={errors.confirmPassword ? 'error' : ''}
								htmlFor="confirmPassword">
								{errors.confirmPassword
									? errors.confirmPassword?.message
									: '	Confirm Password'}
							</label>
							<input
								className={` ${
									errors.confirmPassword ? 'is-invalid' : 'input custom-input'
								}`}
								type="password"
								id="confirmPassword"
								{...register('confirmPassword')}
							/>
						</div>

						<div className="control">
							<label
								className={errors.imageUrl ? 'error' : ''}
								htmlFor="imageUrl">
								{errors.imageUrl
									? errors.imageUrl?.message
									: '	Profile Image url (optional)'}
							</label>
							<input
								className={` ${
									errors.imageUrl ? 'is-invalid' : 'input custom-input'
								}`}
								type="imageUrl"
								id="imageUrl"
								{...register('imageUrl')}
							/>
						</div>

						<button
							onClick={handleSubmit(registerUserWithEmailAndPasswordHandler)}
							className="button create-button"
							type="submit"
							name="submit"
							id="submit-form">
							Agree &Join
						</button>
						<p>
							By clicking Agree & Join, you agree to the LinkedIn (Saddam)
							<span> User Agreement </span>
							<span>Privacy Policy, </span>
							and <span> Cookie Policy.</span>
						</p>
						<p className="option">Or</p>

						<button
							className="btn-modifier"
							onClick={(e) => signInWithGoogleHandler(e)}>
							<img src="/images/google.png" alt="'Logo" />
							<a>Join with Google</a>
						</button>

						<p className="sigin_in">
							Already on LinkedIn?&nbsp;
							<span onClick={() => setLogIn(true)}>Sign-In</span>
							<ArrowRightIcon className="arrow" />
						</p>
					</form>
				</FormWrapper>

				<div className="copyRight link">
					<span> Conditions of Use</span> <span> Privacy Notice </span>{' '}
					<span> Help </span>
				</div>
				<div className="copyRight">
					<span>&copy; 2002-2021, LinkedIn.com, Inc. or its affiliates</span>
				</div>
			</Container>
		</LogInWrapper>
	)
}

export default memo(SignUpScreen)

const LogInWrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	font-size: 1rem;
	display: flex;
	justify-content: center;
	padding: 20px;
	padding-top: 5px;
	color: #222;
`

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	@media (max-width: 360px) {
		width: 97%;
		min-width: 97%;
	}
	label {
		font-size: 13px;
		font-weight: bold;
	}
	img.login__logo {
		width: 210px;
		margin-right: auto;
		margin-left: auto;
		object-fit: content;
		margin-bottom: -1rem;
	}
	.title {
		font-size: 2rem;
		@media (max-width: 578px) {
			font-size: 1.5rem;
		}
		@media (max-width: 578px) {
			font-size: 1rem;
		}
	}
	div.copyRight {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 5px;
	}
	div.copyRight.link span {
		color: #0066c0;
		transition: 0.4s;
		cursor: pointer;
		:hover {
			text-decoration: underline;
		}
	}
	div.copyRight span {
		font-size: 12.5px !important;
		line-height: 1.5 !important ;
		margin: 8px;
		margin-bottom: 0;
		color: #555;
	}
`

const Title = styled.h1`
	font-weight: 400;
	font-size: 28px;
	line-height: 1.2;
	margin-bottom: 5px;
`

const FormWrapper = styled.div`
	width: 25rem;
	min-width: 22rem;
	border-radius: 4px;
	padding: 0.9rem 1.1rem;
	border: 1px #ddd solid;
	background: #fff;
	margin-bottom: 1.2rem;
	margin-top: 1rem;
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	background-color: white;
	@media (max-width: 578px) {
		width: 100%;
		min-width: 90%;
	}
	button {
		font-size: 1rem;
		width: 100%;
		display: block;
		background: blue;
		height: 2.5em;
		cursor: pointer;
		border-style: solid;
		border-width: 1px;
		transition: 0.3s;
		padding: 0;
		text-align: center;
		background-color: #0a66c2;
		border-radius: 34px;
		background-color: #0073b1;
		color: #fff;
		cursor: pointer;
		width: 100%;
		:hover {
			background: #0a66c2;
			background: rgba(14, 118, 168, 0.8);
		}
	}
	button.btn-modifier {
		background: white;
		display: flex;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 25px;
		border: 1px solid #0a66c2;
		:hover {
			border: 2px solid #0a66c2;
			background: rgba(14, 118, 168, 0.2);
		}
		a {
			cursor: pointer;
			display: inline-block;
			transition: 0.4s;
			color: #0066c0;
		}
		img {
			width: 25px;
			height: 25px;
			margin-right: 10px;
		}
	}
	p {
		margin-top: 18px !important;
		font-size: 12.5px !important;
		line-height: 1.5 !important ;
		span {
			color: #0066c0;
			transition: 0.4s;
			cursor: pointer;
			:hover {
				text-decoration: underline;
				color: #0a66c2;
			}
		}
	}
	p.sigin_in {
		cursor: pointer;
		font-size: 1rem !important;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
		span:hover {
			text-decoration: underline;
			color: #0a66c2;
		}
		.arrow {
			font-size: 1rem;
			color: #0066c0;
			text-decoration: underline;
			:hover {
				text-decoration: underline;
				color: #0066c0;
			}
		}
	}

	p.option {
		border-bottom: 1px solid #a6a6a6;
		text-align: center;
		font-weight: bold;
		font-size: 1.2rem;
	}
`
