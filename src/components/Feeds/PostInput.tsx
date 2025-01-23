import { useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../../config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Card from '../UI/Card'
import Avatar from '../UI/Avatar'
import InputOption from './InputOption'
import { MdAddAPhoto, MdOutlineArticle } from 'react-icons/md'
import { FaBriefcase, FaYoutube } from 'react-icons/fa'
import { toast } from 'react-toastify'

export default function PostInput() {
	const [postReference, setPostReference] = useState<string | null>(null)
	const [user] = useAuthState(auth)

	// Create a ref for the input element
	const inputRef = useRef<HTMLInputElement | null>(null)

	// Update state when input changes
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPostReference(event.target.value)
	}

	const submitFormHandler = async (event: { preventDefault: () => void }) => {
		event.preventDefault()

		// Ensure postReference is not empty before proceeding
		if (!postReference) {
			toast.error('Post content cannot be empty.')
			return
		}

		try {
			const docRef = await addDoc(collection(db, 'posts'), {
				timestamp: serverTimestamp(),
				name: user?.displayName || 'code.net',
				imgUrl: user?.photoURL || '/images/linkedin-b.png',
				postContent: postReference,
				optionPostImage: '',
				optionHeadline: '',
				comments: 0,
				reposts: 0,
				likes: 0,
			})

			console.log('Document written with ID: ', docRef.id)
			setPostReference(null)

			// Show success toast
			toast.success('Post submitted successfully!')
		} catch (error: any) {
			console.error('Adding new document failed: ', error)

			// Show error toast
			if (error?.message) {
				toast.error(error.message)
			} else {
				toast.error('Something went wrong, please try again.')
			}
		}
	}
	return (
		<Card>
			<div className="flex space-x-3">
				<Avatar url={user?.photoURL as string} className="h-10 w-10" />
				<form className="w-full flex" onSubmit={submitFormHandler}>
					<input
						ref={inputRef}
						type="text"
						placeholder="Start a post"
						value={postReference || ''}
						onChange={handleInputChange} // Update state when input changes
						minLength={5}
						required
						className="flex-1 rounded-3xl border border-gray-300 p-3 outline-none hover:bg-[rgba(220,227,232,1)] focus:bg-[rgba(220,227,232,1)] transition duration-200 dark:bg-customBlack-700 dark:border-customBlack-500 dark:hover:bg-[rgba(100,100,100,1)]"
					/>
				</form>
			</div>
			<div className="flex items-center justify-between">
				<InputOption title="Photo" color="#70B5F9" Icon={MdAddAPhoto} />
				<InputOption title="Video" color="#7FC15E" Icon={FaYoutube} />
				<InputOption title="Job" color="#FF8C00" Icon={FaBriefcase} />
				<div className="hidden sm:flex">
					<InputOption
						title="Write article"
						color="#FC9295"
						Icon={MdOutlineArticle}
					/>
				</div>
			</div>
			<p className="text-sm flex space-x-1">
				Start a conversation:{' '}
				<span className="ml-2 mr-2 hidden sm:flex hover:border-b border-[#cfcecc] cursor-pointer">
					#FutureOfWork
				</span>
				<span className="hover:border-b border-[#cfcecc] cursor-pointer">
					#ConversationsForChange
				</span>
			</p>
		</Card>
	)
}
