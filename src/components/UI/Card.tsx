import { ReactNode } from 'react'
import { cn } from '../../lib/utils'

type Props = {
	children: ReactNode
	className?: string
}

export default function Card({ children, className }: Props) {
	return (
		<div
			className={cn(
				'overflow-hidden rounded bg-white shadow p-3 border border-customWhite-300 dark:bg-customBlack-700 dark:border-0',
				className,
			)}>
			{children}
		</div>
	)
}
