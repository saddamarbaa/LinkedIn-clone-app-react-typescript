import { memo } from 'react'

type HeaderOptionProps = {
	Icon?: React.ElementType
	isBorderTrue?: boolean
	className?: string
	title?: string
	NoMarginRight?: boolean
	avatar?: string
	showBorder?: boolean
}

const HeaderOption = ({
	Icon,
	title,
	avatar,
	isBorderTrue = false,
	NoMarginRight = false,
}: HeaderOptionProps) => {
	return (
		<div
			className={`${
				isBorderTrue ? 'border-l border-gray-300 pl-5' : ''
			} flex flex-col items-center cursor-pointer transition-all duration-400   ${
				NoMarginRight ? 'mr-0' : 'mr-7.5'
			}`}>
			{Icon && <Icon className="text-gray-600 h-6 w-6 dark:text-white" />}
			{avatar && (
				<img
					src={avatar}
					alt="avatar"
					className="headerOption__icon h-6 w-6 rounded-full object-cover"
				/>
			)}
			<span className="text-xs hidden lg:block text-gray-800 dark:text-white">
				{title}
			</span>
		</div>
	)
}

export default memo(HeaderOption)
