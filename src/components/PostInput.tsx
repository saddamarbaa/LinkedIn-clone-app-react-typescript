import Card from './UI/Card'
import Avatar from './Avatar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../config'
import { MdAddAPhoto, MdOutlineArticle } from 'react-icons/md'
import InputOption from './InputOption'
import { FaBriefcase, FaYoutube } from 'react-icons/fa'

export default function PostInput() {
	const [user] = useAuthState(auth)
	return (
		<Card>
			<div className="flex space-x-3 ">
				<Avatar url={user?.photoURL as string} height={10} width={10} />
				<form className="w-full flex">
					<input
						type="text"
						placeholder="Start a post"
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
