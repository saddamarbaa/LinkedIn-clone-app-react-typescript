import { HiDotsHorizontal } from 'react-icons/hi'
import { PiNotePencil } from 'react-icons/pi'
import { IoIosArrowUp } from 'react-icons/io'
import Avatar from '../UI/Avatar'

interface ChatHeaderProps {
	photoURL: string
	showChat: boolean
	setShowChat: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatHeader({ photoURL, setShowChat }: ChatHeaderProps) {
	return (
		<div
			className="text-black dark:text-white flex justify-between items-center px-3"
			onClick={() => setShowChat((prev) => !prev)}>
			<div className="flex space-x-2 items-center mt-2">
				<Avatar url={photoURL} />
				<p className="font-bold text-sm">Messaging</p>
			</div>
			<div className="flex items-center space-x-3">
				<HiDotsHorizontal className="text-xl cursor-pointer" />
				<PiNotePencil className="text-xl cursor-pointer" />
				<IoIosArrowUp className="text-xl cursor-pointer" />
			</div>
		</div>
	)
}
