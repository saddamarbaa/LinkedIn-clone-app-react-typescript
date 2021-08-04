/** @format */

import firebase from "firebase";
import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { Avatar, Card } from "@material-ui/core";
import Post from "./Post";
import db from "../config/firebase";

const Feed = () => {
	const [post, setPost] = useState([]);
	const postReference = useRef(null);

	useEffect(() => {
		const unsubscribe = db
			.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPost(
					snapshot.docs.map((doc) => {
						return {
							data: doc.data(),
							id: doc.id,
						};
					}),
				);
			});

		return () => {
			unsubscribe();
		};
	}, [post]);

	const submitFormHandler = (event) => {
		const enteredPost = postReference.current.value;
		event.preventDefault();

		db.collection("posts")
			.add({
				name: "Saddam Arbaa",
				imgUrl: "/images/profile.jpg",
				postContent: enteredPost,
				optionPostImage: "",
				optionHeadline: "",
				// set added time to firebase server time
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then((docRef) => {
				console.log("Document written with ID: ", docRef.id);
			})
			.catch((error) => {
				console.error("Error adding document: ", error);
			});

		postReference.current.value = "";
	};

	return (
		<FeedWrapper>
			<Card className='card'>
				<div className='feed__inputcontainer'>
					<div className='feed__input'>
						<CreateIcon />
						<form onSubmit={submitFormHandler}>
							<input
								ref={postReference}
								type='text'
								placeholder='Start a post'
								minLength='5'
								required
							/>
							<button type='submit'>send</button>
						</form>
					</div>
					<div className='feed-inputOptions'>
						<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
						<InputOption
							Icon={SubscriptionsIcon}
							title='Video'
							color='#7FC15E'
						/>

						<InputOption Icon={WorkIcon} title='Job' color='#70B5F9' />

						<div className='hid-s'>
							<InputOption
								Icon={CalendarViewDayIcon}
								title='Write article'
								color='#FC9295'
							/>
						</div>
					</div>
					<p className='conversation-p'>
						Start a conversation:{" "}
						<span className='hid-s'>#FutureOfWork</span>
						<span>#ConversationsForChange</span>
					</p>
				</div>
			</Card>

			<Card className='card'>
				{post?.map(({ id, data }) => {
					return (
						<Post
							name={data.name}
							imgUrl={data.imgUrl}
							optionHeadline={data.optionHeadline}
							postContent={data.postContent}
							optionPostImage={data.optionPostImage}
						/>
					);
				})}
			</Card>

			<Card className='card'>
				<Post
					name='Saddam Arbaa'
					optionHeadline='Full-Stack Developer | Front-End Developer'
					imgUrl='https://avatars.githubusercontent.com/u/51326421?v=4'
					postContent='Hi everyone - I am looking for a new role and would appreciate your support. Thank you in advance for any connections, advice, or opportunities you can offer'
					optionPostImage='/images/profile.jpg'
				/>
			</Card>
		</FeedWrapper>
	);
};

export default Feed;

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
`;
