import React from 'react'
import Card from '../UI/Card'
import { MessageT } from '../../lib/mockData/Message'

const MessageItem: React.FC<{ message: MessageT }> = ({ message }) => {
	return (
		<Card key={message.id} className="flex items-start space-x-4 p-4 border-b">
			<img
				src={message.senderProfilePicUrl}
				alt={message.senderName}
				className="w-12 h-12 rounded-full"
			/>
			<div className="flex-1">
				<div className="font-bold text-lg">{message.senderName}</div>
				<div className="text-sm text-gray-600 dark:text-white">
					{message.senderTitle} at {message.senderCompany}
				</div>
				<div className="text-sm text-gray-500 dark:text-gray-300">
					{message.message}
				</div>
				<div className="text-xs text-gray-400">
					{new Date(message.timestamp).toLocaleString()}
				</div>
			</div>
		</Card>
	)
}

export default MessageItem
