import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { PiNotePencil } from 'react-icons/pi'
import { MdSearch } from 'react-icons/md'
import { IoIosArrowDown } from 'react-icons/io'
import { HiDotsHorizontal } from 'react-icons/hi'
import { CgPlayListSearch } from 'react-icons/cg'
import moment from 'moment'

import { auth } from '../config'
import Avatar from './Avatar'
import { mockChats } from '../lib/mockData'

export default function Chat() {
	const [user] = useAuthState(auth)
	const [showChat, setShowChat] = useState(true)

	return (
		<div className=" fixed bottom-2 right-1 bg-white w-full   max-w-xs overflow-hidden  border dark:bg-customBlack-700 dark:border-0  shadow-2xl rounded-t-lg  cursor-pointer fex flex-col space-y-3 z-50 ">
			<div
				className="text-black dark:text-white flex  justify-between items-center  px-3"
				onClick={() => {
					setShowChat((pre) => !pre)
				}}>
				<div className="flex space-x-2  items-center  mt-2">
					<Avatar url={user?.photoURL as string} />
					<p className="font-bold text-sm">Messaging</p>
				</div>
				<div className="flex items-center space-x-3">
					<HiDotsHorizontal className="text-xl cursor-pointer" />
					<PiNotePencil className="text-xl cursor-pointer" />
					<IoIosArrowDown className="text-xl cursor-pointer" />
				</div>
			</div>

			{showChat && (
				<div className="border-t p-2 dark:border-0">
					<div className="px-2">
						<div className="w-full rounded border  bg-customBlack-100 p-2 flex items-center transition duration-200 dark:bg-customBlack-700 dark:border-customBlack-500 dark:hover:bg-[rgba(100,100,100,1)] hover:bg-customWhite-300">
							<MdSearch className="text-xl cursor-pointer" />
							<input
								type="text"
								placeholder="Send Message"
								minLength={5}
								required
								className="bg-transparent outline-none px-2 flex-1 text-base"
							/>
							<CgPlayListSearch className="text-xl cursor-pointer" />
						</div>
					</div>

					<div className="mt-4 flex flex-col hover:overflow-y-auto max-h-[70vh]">
						{mockChats?.map((user) => (
							<div
								className="flex space-x-2  items-center text-sm hover:bg-customWhite-300 p-2 border-b dark:border-0 dark:hover:bg-customBlack-600"
								key={user?.id}>
								<Avatar url={user?.photoUrl as string} />
								<div className="px-2 flex-1">
									<p>{user.name}</p>
									<p className="text-[.7rem]">{user.lastMessage}</p>
								</div>
								<div className="text-[.7rem]">
									{moment(user.lastMessageTime).fromNow()}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}
