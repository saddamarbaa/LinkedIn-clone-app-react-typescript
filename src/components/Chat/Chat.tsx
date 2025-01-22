import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../config'
import ChatList from './ChatList'
import SearchBar from './SearchBar'
import ChatHeader from './ChatHeader'

export default function Chat() {
	const [user] = useAuthState(auth)
	const [showChat, setShowChat] = useState(false)

	return (
		<div className=" fixed bottom-2 right-1 bg-white w-full   max-w-xs overflow-hidden  border dark:bg-customBlack-700 dark:border-0  shadow-2xl rounded-t-lg  cursor-pointer fex flex-col space-y-3 z-50 ">
			<ChatHeader
				photoURL={user?.photoURL as string}
				showChat={showChat}
				setShowChat={setShowChat}
			/>
			{showChat && (
				<div className="border-t p-2 dark:border-0">
					<div className="px-2">
						<SearchBar />
					</div>
					<ChatList />
				</div>
			)}
		</div>
	)
}
