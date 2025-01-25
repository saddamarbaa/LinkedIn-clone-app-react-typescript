export default function NotificationItem({ notification }: any) {
	// Determine the background color for the icon based on the notification type
	const iconColors: Record<string, string> = {
		like: 'bg-blue-200',
		comment: 'bg-yellow-200',
		connect: 'bg-green-200',
		share: 'bg-purple-200',
		endorse: 'bg-teal-200',
	}

	// Notification icon rendering based on type
	const icon: Record<string, string> = {
		like: '👍',
		comment: '💬',
		connect: '🤝',
		share: '🔗',
		endorse: '✅',
	}

	return (
		<div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md dark:bg-customBlack-700 dark:text-white hover:bg-gray-50 cursor-pointer">
			{/* Icon */}
			<div className="flex-shrink-0">
				<div className={`${iconColors[notification.icon]} p-2 rounded-full`}>
					{/* Render the appropriate icon */}
					{icon[notification.icon]}
				</div>
			</div>

			{/* Notification Text */}
			<div className="flex-1">
				{/* Title of the notification */}
				<p className="text-lg font-medium text-gray-700 dark:text-white">
					{notification.title}
				</p>
				{/* Time of the notification */}
				<p className="text-sm text-gray-500 dark:text-gray-400">
					{notification.time}
				</p>
			</div>
		</div>
	)
}
