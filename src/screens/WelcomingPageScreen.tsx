import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import CallIcon from '@material-ui/icons/Call'

import SignUpScreen from './SignUpScreen'
import LogInScreen from './LogInScreen'

const WelcomingPage = () => {
	const [logIn, setLogIn] = useState(false)
	const [signIn, setSignIn] = useState(false)

	useEffect(() => {
		const redirectToAuthScreen = () => {
			if (logIn) {
				return <SignUpScreen />
			}

			if (signIn) {
				return <LogInScreen />
			}
		}

		redirectToAuthScreen()
	}, [logIn])

	if (logIn) {
		return <LogInScreen />
	}

	if (signIn) {
		return <LogInScreen />
	}

	return (
		<Wrapper>
			<header>
				<div>
					<img src="images/welcoming-Linkedin-Logo.png" alt="Logo" />
				</div>
				<div className="buttons">
					<button onClick={() => setLogIn(true)}>Join now</button>
					<button onClick={() => setSignIn(true)}> Sign In</button>
				</div>
			</header>
			<div className="welcoming-section">
				<div className="content">
					<h1>Welcome to your professional community</h1>
					<button className="module-button">
						Find a person you know <ArrowForwardIosIcon />
					</button>
					<button className="module-button">
						Search for a job <ArrowForwardIosIcon />
					</button>
					<button className="module-button">
						Learn a new skill <ArrowForwardIosIcon />
					</button>
				</div>
				<div className="image">
					<img src="images/welcoming.svg" alt="Logo" />
				</div>
			</div>
			<div className="bottom-section">
				<div className="content">
					<img
						src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj"
						alt="image"
					/>
					<div className="contact">
						<Heading>Connect with people who can help</Heading>
					</div>
					<button className="module-button">
						Find people you know
						<CallIcon />
					</button>
				</div>

				<div className="content">
					<img
						src="	https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv"
						alt="image"
					/>
					<div className="contact">
						<Heading>Learn the skills that can help you now</Heading>
					</div>
					<button className="module-button">
						Choose a topic to learn <ArrowDropDownIcon />
					</button>
				</div>
			</div>
			<div className="post-job-section">
				<Heading> Post your job and find the people you need</Heading>
			</div>
			<footer>
				<div className="top-content">
					<div>
						<img src="images/welcoming-Linkedin-Logo.png" alt="Logo" />
					</div>
					<div>
						<h5>General</h5>
						<span> Sign Up</span>
						<span> Help Center</span>
						<span> About</span>
						<span> Press</span>
						<span> Blog</span>
						<span> Careers</span>
						<span> Developers</span>
					</div>
					<div>
						<h5>Browse LinkedIn </h5>

						<span> Learning</span>
						<span> Jobs</span>
						<span>Salary</span>
						<span> Mobile</span>
						<span>Services</span>
					</div>

					<div>
						<h5> Directories</h5>
						<span> Members </span>
						<span> Jobs</span>
						<span>Companies</span>
						<span>Salaries</span>
						<span> Featured</span>
						<span> Learning</span>
						<span>Posts</span>
						<span> Articles</span>
						<span> Schools</span>
						<span> News</span>
						<span> News Letters</span>
						<span>Services</span>
						<span>Interview Prep</span>
						<span> Products</span>
					</div>
				</div>
				<div className="bottom-content copy-right">
					<span> LinkedIn &copy; 2021</span> <span> About </span>
					<span>Accessibility</span>
					<span>User Agreement</span>
					<span>Privacy Policy</span>
					<span>Cookie Policy</span>
					<span> Copyright Policy</span>
					<span> Brand Policy</span>
					<span>Guest Controls</span>
					<span>Community Guidelines</span>
					<span>Language</span>
				</div>
			</footer>
		</Wrapper>
	)
}

export default React.memo(WelcomingPage)

const Wrapper = styled.div`
	width: 100vw;
	min-height: 100vh;
	header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 1rem;
		padding: 0rem 5%;
		img {
			object-fit: contain;
			width: 100px;
			@media (max-width: 568px) {
				height: 4rem;
				weight: 4rem;
			}
			@media (max-width: 300px) {
				display: none;
			}
		}
		.buttons {
			display: flex;
			button {
				font-size: 1rem;
				display: block;
				height: 2.5em;
				cursor: pointer;
				border-style: solid;
				border-width: 1px;
				transition: 0.3s;
				text-align: center;
				background-color: #0a66c2;
				background-color: #0073b1;
				color: #fff;
				cursor: pointer;
				font: inherit;
				border-radius: 6px;
				padding: 0.5rem 1.5rem;
				margin-left: 1rem;
				&:hover,
				&:active {
					background: #0a66c2;
					background: rgba(14, 118, 168, 0.8);
					box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
				}
				@media (max-width: 578px) {
					margin-left: 0.5rem;
				}
			}
		}
	}
	.welcoming-section {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 3rem 5%;
		.content {
			flex: 0.4;
			padding-top: 3rem;
			min-width: 30rem;
			max-width: 30rem;
			h1 {
				font-size: 2rem;
				color: #0a66c2;
				margin-bottom: 2rem;
			}
			@media (max-width: 578px) {
				min-width: 90%;
				max-width: 90%;
			}
		}
		.image {
			flex: 0.6;
			min-width: 35rem;
			img {
				width: 100%;
				height: 100%;
				object-fit: contain;
				@media (max-width: 578px) {
					margin-top: 1rem;
				}
			}
		}
	}
	.module-button {
		line-height: 1.4;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.9);
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 56px;
		width: 408px;
		line-height: 25px;
		background-color: #fff;
		padding: 16px 16px;
		border-radius: 6px;
		-webkit-box-shadow: 0px -1px 1px rgb(0 0 0 / 8%),
			1px 0px 1px rgb(0 0 0 / 8%), -1px 0px 1px rgb(0 0 0 / 8%),
			0px 1px 1px rgb(0 0 0 / 8%);
		box-shadow: 0px -1px 1px rgb(0 0 0 / 8%), 1px 0px 1px rgb(0 0 0 / 8%),
			-1px 0px 1px rgb(0 0 0 / 8%), 0px 1px 1px rgb(0 0 0 / 8%);
		padding: 16px;
		margin-bottom: 16px;
		font-size: 1.5rem;
		&:hover,
		&:focus {
			background-color: rgba(220, 227, 232);
			background-color: rgba(220, 227, 232);
		}
		@media (max-width: 578px) {
			width: 100%;
			font-size: 1.2rem;
		}
	}
	.bottom-section {
		background: white;
		padding: 5rem 5%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		.contact {
			font-size: 1.3rem;
			margin: 2rem 0;
		}
		.module-button {
			font-size: 1.3rem;
		}
		.content {
			img {
				height: 18rem;
				margin-bottom: 1rem;
			}
			@media (max-width: 578px) {
				margin-bottom: 3rem;
				width: 90%;
				object-fit: contain;
			}
		}
	}
	.post-job-section {
		padding: 4rem 5%;
		color: #b24079;
		background: #f1ece5;
	}
	footer {
		.top-content {
			padding: 4rem 5%;
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
			grid-gap: 2rem;
			div {
				h5 {
					font-size: 1rem;
				}
				span {
					cursor: pointer;
					display: block;
					margin-top: 1rem;
					transition: 0.3s;
					&:hover {
						text-decoration: underline;
						color: #0a66c2;
					}
				}
			}
		}
		img {
			object-fit: contain;
			width: 100px;
			margin-top: -1rem;
			display: block;
			@media (max-width: 568px) {
				height: 4rem;
				weight: 4rem;
			}
		}
	}
	.bottom-content.copy-right {
		padding: 4rem 5%;
		background: white;
		span {
			font-size: 0.9rem;
			cursor: pointer;
			margin: 1rem;
			margin-left: 0;
			transition: 0.3s;
			&:hover {
				text-decoration: underline;
				color: #0a66c2;
			}
			@media (max-width: 568px) {
				display: block;
			}
		}
	}
`

const Heading = styled.div`
	font-size: 1.7rem;
	@media (max-width: 578px) {
		font-size: 1.4rem;
	}
	@media (max-width: 300px) {
		font-size: 1rem;
	}
`
