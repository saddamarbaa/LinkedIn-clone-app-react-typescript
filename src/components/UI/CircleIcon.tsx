import { cn } from '../../lib/utils'

type CircleIconProps = {
	isOffLine?: boolean
	className?: string
}

export const CircleIcon = ({ isOffLine, className }: CircleIconProps) => {
	return (
		<div
			className={cn(
				`absolute bottom-0 right-0 h-4 w-4 rounded-full ${
					isOffLine ? 'bg-red-500' : 'bg-green-600'
				}`,
				className,
			)}
		/>
	)
}
