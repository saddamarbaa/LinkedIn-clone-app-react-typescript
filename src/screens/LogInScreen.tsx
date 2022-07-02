import styled from 'styled-components'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import React, { memo, useEffect, useState } from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	auth,
	GoogleAuthProvider,
	googleProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from '../config/firebase'
import SignUpScreen from './SignUpScreen'
import { LoginSchemaValidation } from '../utils'
import { AuthLoginRequestType } from '../types'

const LogInScreen = () => {
	const history = useNavigate()
	const [signIn, setSignIn] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<AuthLoginRequestType>({
		resolver: yupResolver(LoginSchemaValidation),
	})

	useEffect(() => {
		const redirectToRegisterPage = () => {
			if (signIn) {
				return <SignUpScreen />
			}
		}
		redirectToRegisterPage()
	}, [signIn])

	if (signIn) {
		return <SignUpScreen />
	}

	const signInWithEmailAndPasswordHandler = (data: AuthLoginRequestType) => {
		console.log(JSON.stringify(data, null, 2))

		signInWithEmailAndPassword(auth, data.email, data.password)
			.then((userCredential) => {
				// signIn successful.
				const user = userCredential?.user
				console.log(user)
				history('/')
			})
			.catch((error) => {
				const errorCode = error?.code
				const errorMessage = error?.message
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

				<FormWrapper>
					<Title>Sign-In </Title>
					<form autoComplete="off">
						<div className="control">
							<label className={errors.email ? 'error' : ''} htmlFor="email">
								{errors.email ? errors.email?.message : 'Email'}
							</label>
							<input
								type="email"
								id="email"
								autoComplete="email"
								{...register('email')}
								className={` ${
									errors.email ? 'is-invalid' : 'input custom-input'
								}`}
							/>
						</div>
						<div className="control">
							<label
								className={errors.password ? 'error' : ''}
								htmlFor="password">
								{errors.password
									? errors.password?.message
									: '	Password (6 or more characters)'}
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

						<button
							onClick={handleSubmit(signInWithEmailAndPasswordHandler)}
							className="button create-button"
							name="submit"
							id="submit-form">
							Sign-In
						</button>
						<p>
							By clicking Sign-In, you agree to the LinkedIn (Saddam)
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
						<p className="sigin_in" onClick={() => setSignIn(() => true)}>
							Create your LinkedIn account &nbsp;
							<span>Register</span>
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

export default memo(LogInScreen)

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
		color: #222;
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
	margin-bottom: 20px;
	text-align: center;
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
		width: 95%;
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
