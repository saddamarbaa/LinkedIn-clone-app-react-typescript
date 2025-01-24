import { CiGlobe } from 'react-icons/ci'
import { HiDotsHorizontal } from 'react-icons/hi'
import { MdClear, MdPhotoCameraBack } from 'react-icons/md'
import { FaComment, FaPaperPlane, FaShare, FaThumbsUp } from 'react-icons/fa'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { TbMoodAngry } from 'react-icons/tb'
import { useAuthState } from 'react-firebase-hooks/auth'
import { IoMdAdd } from 'react-icons/io'
import { toast } from 'react-toastify'
import React, { useState } from 'react'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

import { PostResponseType } from '../../types'
import Card from '../UI/Card'
import Avatar from '../UI/Avatar'
import InputOption from './InputOption'
import { getRandomIntNumberBetween } from '../../utils'
import { auth, db } from '../../config'
import Comments from './Comments'
import moment from 'moment'

type Props = {
	post: PostResponseType
	index: number
	isAllowAction?: boolean
}

const formatNumber = (number: number) =>
	number >= 1000 ? (number / 1000).toFixed(1) + 'k' : number

const Post = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
	const { post, index, isAllowAction = true } = props
	const [commentText, setCommentText] = useState('')
	const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(true)

	const comments = post?.comments?.length ?? getRandomIntNumberBetween(100, 0)
	const reposts = post?.reposts?.length ?? getRandomIntNumberBetween(100, 0)
	const likes = post?.likes?.length ?? getRandomIntNumberBetween(100, 0)

	const [user] = useAuthState(auth)

	const showFlow =
		post.user?.displayName !== user?.displayName && index % 2 === 0

	const actions = [
		{ Icon: FaThumbsUp, title: 'Like' },
		{ Icon: FaComment, title: 'Comment' },
		{ Icon: FaShare, title: 'Repost' },
		{ Icon: FaPaperPlane, title: 'Send' },
	]

	const handleLike = async (post: PostResponseType) => {
		try {
			const postId = post.id as string
			const docRef = doc(db, 'posts', postId)
			const docSnap = await getDoc(docRef)

			if (!docSnap.exists()) {
				console.log('Post document does not exist')
				toast.error('Post document does not exist')
				return
			}

			const existingData = docSnap.data()
			const likes = existingData.likes || []
			const userEmail = user?.email

			const userAlreadyLiked = likes.some(
				(like: { email: string | null | undefined }) =>
					like.email === userEmail,
			)

			if (userAlreadyLiked) {
				// User has already liked the post, so unlike it
				const updatedLikes = likes.filter(
					(like: { email: string | null | undefined }) =>
						like.email !== userEmail,
				)
				const formDataCopy = {
					...existingData,
					likes: updatedLikes,
				}
				await updateDoc(docRef, formDataCopy)

				toast.dismiss()
				toast.success('Unliked the post!')
			} else if (!userAlreadyLiked) {
				// User has not liked the post, so like it
				const updatedLikes = [...likes, { email: userEmail }]
				const formDataCopy = {
					...existingData,
					likes: updatedLikes,
				}
				await updateDoc(docRef, formDataCopy)

				toast.dismiss()
				toast.success('Liked the post!')
			} else {
				// User has already liked the post or an unexpected condition occurred
				toast.error('You have already liked this post.')
			}
		} catch (error) {
			console.log('Error updating post likes:', error)

			toast.dismiss()
			toast.error('Failed to update the post. Please try again.')
		}
	}

	const handleCommentSubmit = async (
		event: React.FormEvent<HTMLFormElement>,
	) => {
		event.preventDefault()

		if (commentText.trim() === '') {
			return
		}

		try {
			const postId = post.id as string
			const docRef = doc(db, 'posts', postId)
			const docSnap = await getDoc(docRef)

			if (!docSnap.exists()) {
				console.log('Post document does not exist')
				toast.error('Post document does not exist')
				return
			}

			const existingData = docSnap.data()
			const comments = existingData?.comments || []

			// Extract only necessary fields from the user object
			const commentData = {
				text: commentText.trim(),
				user: {
					photoURL: user?.photoURL,
					uid: user?.uid,
					email: user?.email || 'Anonymous', // Use a fallback in case of missing email
					displayName: user?.displayName || 'Anonymous',
					// Add other fields if needed, but keep it simple and serializable
				},
				timestamp: {
					seconds: Math.floor(Date.now() / 1000), // Get the current timestamp in seconds
					nanoseconds: 0,
				},
			}

			const updatedComments = [commentData, ...comments]
			const formDataCopy = {
				...existingData,
				comments: updatedComments,
			}

			await updateDoc(docRef, formDataCopy)

			setCommentText('')
			setCommentBoxVisible(false)

			toast.dismiss()
			toast.success('Comment submitted successfully!')
		} catch (error) {
			console.log('Error submitting comment:', error)

			toast.dismiss()
			toast.error('Failed to submit comment. Please try again.')
		}
	}

	return (
		<div ref={ref}>
			<Card className="cursor-pointer px-0 mt-4">
				<div>
					<div className="flex space-x-1 w-full px-4">
						<Avatar
							url={post?.user?.photoURL || '/images/linkedin-b.png'}
							alt="profile image"
						/>
						<div className="flex-1">
							<h4 className="font-bold capitalize hover:text-customBlue-950 dark:hover:text-customWhite-40 ">
								<span>{post?.user?.displayName}</span>
								<span className="text-xs text-gray-500 ml-2 dark:text-customWhite-500">
									{post?.user?.displayName !== user?.displayName && 'Following'}
								</span>
							</h4>
							<p className="text-xs text-customBlue-950 dark:text-customWhite-100 font-semibold">
								View my portfolio
							</p>
							<p className="text-xs flex text-gray-500">
								<span>
									{post?.timestamp
										? moment(post.timestamp.toDate()).fromNow()
										: moment(
												moment().subtract(
													Math.floor(Math.random() * 20) + 1,
													'days',
												),
										  ).fromNow()}
								</span>
								<span>
									<CiGlobe className="ml-4 text-sm" />
								</span>
							</p>
						</div>
						{showFlow ? (
							<div className="-m-2">
								<InputOption
									Icon={IoMdAdd}
									title="Follow"
									IconClassName="w-6 h-6 text-customBlue-950 dark:text-white"
									titleClassName="md:text-base text-customBlue-950 font-bold"
									className="space-x-2 py-2"
								/>
							</div>
						) : (
							<div className="flex space-x-3">
								<HiDotsHorizontal className="text-sm cursor-pointer" />
								<MdClear className="text-sm cursor-pointer" />
							</div>
						)}
					</div>
					<div className="px-4 py-2 text-sm">
						{post.content || post?.postContent}
					</div>
					{post.optionPostImage && (
						<div className="post-option-img">
							<figure>
								<img
									className="w-full cursor-pointer"
									src={post.optionPostImage}
									alt="post image"
									loading="lazy"
								/>
							</figure>
						</div>
					)}
					<div className="flex items-center justify-between mt-2 dark:text-white text-sm px-4">
						<div className="flex items-center">
							<FcLikePlaceholder className="w-3 h-3" />
							<FaThumbsUp className="w-3 h-3 text-customBlue-950  dark:text-customWhite-40 dark:hover:text-customWhite-40" />
							<FcLike className="w-3 h-3" />
							<TbMoodAngry className="w-3 h-3" />
							<span className="text-customBlue-950 font-bold text-sm ml-2 dark:hover:text-customWhite-40 dark:text-customWhite-40">
								{formatNumber(likes)}
							</span>
						</div>
						<div className="flex items-center space-x-3">
							<p>{formatNumber(comments)} comments</p>
							<p>{formatNumber(reposts)} reposts</p>
						</div>
					</div>
					<div className="flex items-center justify-between mt-3 dark:text-white border-t dark:border-customBlack-600 text-sm px-4">
						{actions.map(({ Icon, title }) => (
							<InputOption
								key={title}
								Icon={Icon}
								title={title}
								IconClassName="w-4 h-4"
								titleClassName="md:text-base"
								className="space-x-2 py-2"
								onClick={() => {
									if (title === 'Like' && isAllowAction && post.id) {
										handleLike(post)
									} else if (title === 'Comment') {
										setCommentBoxVisible((prevState) => !prevState)
									}
								}}
							/>
						))}
					</div>

					{isAllowAction && commentBoxVisible ? (
						<div className="flex px-5 space-x-2 mt-4">
							<Avatar url={user?.photoURL as string} className="h-9 w-9" />
							<form
								className="w-full flex flex-1 rounded-3xl border border-gray-400 py-2 px-4"
								onSubmit={handleCommentSubmit}>
								<input
									placeholder="Write a comment..."
									value={commentText}
									onChange={(e) => setCommentText(e.target.value)}
									type="text"
									className="outline-none border-none bg-transparent flex-1 items-center text-base"
								/>
								<TbMoodAngry className="w-6 h-6 " />
								<MdPhotoCameraBack className="w-6 h-6 ml-3" />
							</form>
						</div>
					) : null}

					{commentBoxVisible && post?.comments && post?.comments?.length > 0 ? (
						<Comments comments={post?.comments} />
					) : null}
				</div>
			</Card>
		</div>
	)
})

export default Post
