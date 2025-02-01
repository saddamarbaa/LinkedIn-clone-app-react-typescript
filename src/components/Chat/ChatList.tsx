import { mockChats } from '../../lib/mockData'
import ChatItem from './ChatItem'

const ChatList = () => (
	<div className="mt-4 flex flex-col hover:overflow-y-auto max-h-[70vh]">
		{mockChats.map((user, index) => (
			<ChatItem key={user.id} user={user} index={index} />
		))}
	</div>
)

export default ChatList
