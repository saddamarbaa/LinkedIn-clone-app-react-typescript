import { useEffect, useState } from 'react'
import Post from './Post'
import PostInput from './PostInput'

import FlipMove from 'react-flip-move'
import { PostResponseType } from '../../types'
import {
	collection,
	// getDocs,
	limit,
	onSnapshot,
	orderBy,
	query,
} from 'firebase/firestore'
import { db } from '../../config'
import { mockPosts } from '../../lib/mockData'

export default function Feed() {
	const [_loading, setLoading] = useState(true)
	const [posts, setPosts] = useState<PostResponseType[] | []>([])

	useEffect(() => {
		// Set up real-time listener for updates
		const postsQuery = query(
			collection(db, 'posts'),
			orderBy('timestamp', 'desc'),
			limit(2),
		)

		const unsubscribe = onSnapshot(postsQuery, (querySnapshot) => {
			const updatedPosts = querySnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			})) as PostResponseType[]

			setPosts(updatedPosts) // Update state with new post data when updated
		})

		// Initial fetch (the onSnapshot will handle real-time updates)
		setLoading(false)

		// Clean up the listener when the component unmounts
		return () => unsubscribe()
	}, [])

	return (
		<div className="flex-1  shadow-lg  flex flex-col   mb-52 ">
			<PostInput />

			<FlipMove>
				{posts.map((post, index) => (
					<Post
						key={post.id || `${Math.random()}-${index}`}
						post={post}
						index={index}
						isAllowAction
					/>
				))}
			</FlipMove>

			{/* Mocked posts */}
			{mockPosts.map((post, index) => (
				<Post
					key={post.id || `${Math.random()}-${index}`}
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					post={post}
					index={index}
					isAllowAction={false}
				/>
			))}
		</div>
	)
}
