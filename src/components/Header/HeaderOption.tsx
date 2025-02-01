import { useMemo } from 'react'
import { getRandomIntNumberBetween } from '../../utils'
import Avatar from '../UI/Avatar'

type HeaderOptionProps = {
	Icon?: React.ElementType
	isBorderTrue?: boolean
	className?: string
	title?: string
	NoMarginRight?: boolean
	avatar?: string
	showBorder?: boolean
	showNotification?: boolean
}

const HeaderOption = ({
	Icon,
	title,
	avatar,
	isBorderTrue = false,
	NoMarginRight = false,
	showNotification = false,
}: HeaderOptionProps) => {
	{
		console.log(showNotification)
	}

	const notificationCount = useMemo(() => {
		return getRandomIntNumberBetween(100, 0)
	}, [])

	return (
		<div
			className={`${
				isBorderTrue ? 'border-l border-gray-300 pl-5' : ''
			} flex flex-col items-center cursor-pointer transition-all duration-400   ${
				NoMarginRight ? 'mr-0' : 'mr-7.5'
			} relative`}>
			{title === 'Notifications' && (
				<span className="absolute -top-[12px] right-[13px] bg-red-500 text-white text-[11px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
					{notificationCount}
				</span>
			)}

			{Icon && <Icon className="text-gray-600 h-6 w-6 dark:text-white" />}
			{avatar && (
				<Avatar
					url={avatar}
					alt="avatar"
					className="h-6 w-6 rounded-full object-cover"
				/>
			)}
			<span className="text-xs hidden lg:block text-gray-800 dark:text-white">
				{title}
			</span>
		</div>
	)
}

export default HeaderOption
