import moment from 'moment'
import Avatar from '../UI/Avatar'
import { ChatT } from '../../types/Chat'

type Props = {
	user: ChatT
	index: number
}

const ChatItem = ({ user, index }: Props) => {
	// Logic to determine if the user is online or offline based on index
	const isOffLine = index % 2 !== 0

	return (
		<div
			className="flex space-x-2 items-center text-sm hover:bg-customWhite-300 p-2 border-b dark:border-0 dark:hover:bg-customBlack-600 transition"
			key={user?.id}>
			<Avatar
				url={user?.photoUrl as string}
				isOffLine={isOffLine}
				circleIconClassNames="w-3 h-3"
			/>
			<div className="px-2 flex-1">
				<p>{user.name}</p>
				<p className="text-[.7rem]">{user.lastMessage}</p>
			</div>
			<div className="text-[.7rem]">
				{moment(user.lastMessageTime).fromNow()}
			</div>
		</div>
	)
}

export default ChatItem
