import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import { Card } from '@material-ui/core'
import FlipMove from 'react-flip-move'
import {
	addDoc,
	collection,
	onSnapshot,
	orderBy,
	query,
	limit,
	serverTimestamp,
} from '@firebase/firestore'

import Post from './Post'
import { db } from '../config/firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import HiddenUser from './HiddenUser'
import { PostResponseType } from '../types'

const Feed = () => {
	const [post, setPost] = useState<PostResponseType[] | []>([])
	const [postReference, setPostReference] = useState('')
	const user = useSelector(selectUser)
	console.log(post)

	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(collection(db, 'posts'), orderBy('timestamp', 'desc'), limit(3)),
			(snapshot) =>
				setPost(
					snapshot.docs.map((doc) => ({
						id: doc.id && doc.id,
						timestamp: doc.data()?.timestamp,
						name: doc.data()?.name,
						optionHeadline: doc.data()?.optionHeadline,
						postContent: doc.data()?.postContent,
						optionPostImage: doc.data()?.optionPostImage,
						imgUrl: doc.data()?.imgUrl,
					})),
				),
		)

		return () => {
			unsubscribe()
		}
	}, [])

	const submitFormHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		if (postReference) {
			try {
				const docRef = await addDoc(collection(db, 'posts'), {
					timestamp: serverTimestamp(),
					name: user?.displayName ? user?.displayName : 'code.net',
					imgUrl: user?.photoURL ? user.photoURL : '/images/index.jpg',
					postContent: postReference,
					optionPostImage: '',
					optionHeadline: '',
				})
				console.log('Document written with ID: ', docRef.id)
				setPostReference('')
			} catch (error: any) {
				console.log('Adding new docs fail: ', error)
				if (error && error?.message) {
					alert(error?.message)
				}
			}
		}
	}

	return (
		<FeedWrapper>
			<HiddenUser />
			<Card className="card">
				<div className="feed__inputcontainer">
					<div className="feed__input">
						<CreateIcon />
						<form onSubmit={submitFormHandler}>
							<input
								value={postReference}
								onChange={(e) => setPostReference(e.target.value)}
								type="text"
								placeholder="Start a post"
								minLength={5}
								required
							/>
							<button type="submit">send</button>
						</form>
					</div>
					<div className="feed-inputOptions">
						<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
						<InputOption
							Icon={SubscriptionsIcon}
							title="Video"
							color="#7FC15E"
						/>

						<InputOption Icon={WorkIcon} title="Job" color="#70B5F9" />

						<div className="hid-s">
							<InputOption
								Icon={CalendarViewDayIcon}
								title="Write article"
								color="#FC9295"
							/>
						</div>
					</div>
					<p className="conversation-p">
						Start a conversation: <span className="hid-s">#FutureOfWork</span>
						<span>#ConversationsForChange</span>
					</p>
				</div>
			</Card>

			{/* @ts-ignore */}
			<FlipMove>
				{post?.map(
					({
						id,
						name,
						optionPostImage,
						postContent,
						optionHeadline,
						imgUrl,
					}) => {
						return (
							<Card className="card" key={id}>
								<Post
									name={name}
									imgUrl={imgUrl}
									optionHeadline={optionHeadline}
									postContent={postContent}
									optionPostImage={optionPostImage}
								/>
							</Card>
						)
					},
				)}
			</FlipMove>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Rich Experienced Web Application Engineer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="Hi everyone - I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer"
					optionPostImage="/images/pprofilepic.jpg"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="Hi everyone - I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer"
					optionPostImage="/images/profile.jpg"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="I am looking for a new role DM me on Linkedin (Saddam Arbaa) for any Remote or freelancing opportunities. Thank you in advance for any connections, advice, or opportunities you can offer"
					optionPostImage="/images/LinkedIns.png"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="Flow me on Github (saddamarbaa ) for more React + Next Js projects implementation"
					optionPostImage="/images/github.png"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="Flow me on Twitter (Web Development Coach | Saddam Arbaa) Today I coded 7 hrs 47 mins towards my @WakaTime
 goal of coding 1 hr per day except saturday. https://wakatime.com/goals "
					optionPostImage="/images/twiter.png"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Web Development Coach | Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent="“mentor” Dm me on Instagram (saddam.dev) for 1-1 mentoring "
					optionPostImage="/images/instgram.png"
				/>
			</Card>

			<Card className="card">
				<Post
					name="Saddam Arbaa"
					optionHeadline="Full-Stack Developer | Front-End Developer | Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + MongoDB"
					imgUrl="https://avatars.githubusercontent.com/u/51326421?v=4"
					postContent=" ▸ I Made linkedin Clone Application
▸ Project descriptions
a demo of linkedin Clone with the main functionality build with React Js, Redux (a mobile-friendly).
▸ Features
● Complete user authentication users can sign in, sign out
● add post
▸ Tech Stack
● Client: React Js, Redux, Styled Component, Material-UI
● Server: Firebase Realtime Database, Firebase Google Authentication, Firebase Email, and password Authentication
▸ Hosting: hosted on Firebase hosting.
▸ GitHub Repo: https://github.com/saddamarbaa/LinkedIn-clone-app
▸ I would love to hear feedback from you please write me in the comment"
					optionPostImage="/images/my-app.png"
				/>
			</Card>
		</FeedWrapper>
	)
}

export default React.memo(Feed)

const FeedWrapper = styled.div`
	flex: 1;
	width: 550px;
	margin-right: 20px;
	margin-left: 20px;
	font-size: 0.9rem;
	.card {
		margin-bottom: 0.8rem;
		@media (max-width: 578px) {
			margin: 0;
			margin-top: 0.8rem;
		}
	}
	.feed__inputcontainer {
		background: white;
		padding: 1rem;
		border-radius: 0.8rem;
	}
	.feed__input {
		border: 1px solid lightgray;
		display: flex;
		padding: 0.8rem;
		color: gray;
		padding-left: 1rem;
		border-radius: 1.4rem;
		align-items: center;
		&:hover,
		&:focus {
			background-color: rgba(220, 227, 232);
			background-color: rgba(220, 227, 232);
		}
		form {
			display: flex;
			width: 100%;
			input {
				border: none;
				flex: 1;
				padding: 0.8rem;
				margin-left: 0.8rem;
				outline: none;
				font-weight: 600;
				background: transparent;
				color: #222;
			}
			button {
				display: none;
			}
		}
	}
	.feed-inputOptions {
		display: flex;
		justify-content: space-between;
		padding: 1.2rem 0;
		border-bottom: 1px solid #cfcecc;
	}
	.conversation-p {
		padding-top: 1rem;
		font-size: 0.9rem;
		span:hover {
			border-bottom: 1px solid #cfcecc;
		}
	}
	@media (min-width: 991.98px) {
		min-width: 550px;
	}
	.hid-s {
		@media (max-width: 578px) {
			display: none;
		}
	}
	@media (max-width: 578px) {
		max-width: 100%;
		padding: 0 5%;
		overflow: hidden !important;
	}
`
