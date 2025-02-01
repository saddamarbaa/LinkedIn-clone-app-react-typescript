import React from 'react'
import { cn } from '../../lib/utils'

type Props = {
	text: string
	className?: string
	Icon: React.ElementType
}
export default function Activities({ Icon, text, className }: Props) {
	return (
		<div
			className={cn(
				'flex items-center space-x-2 cursor-pointer   ',
				className,
			)}>
			<Icon className="text-lg h-5 w-5 text-customBlue-950 dark:text-white" />
			<span className="hover:underline cursor-pointer font-semibold text-xs ">
				{text}
			</span>
		</div>
	)
}
