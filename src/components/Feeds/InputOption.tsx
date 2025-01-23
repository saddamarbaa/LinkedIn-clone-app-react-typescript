import { cn } from '../../lib/utils'

type HeaderOptionProps = {
	Icon: React.ElementType
	color?: string
	title: string
	IconClassName?: string
	titleClassName?: string
	className?: string
}

const InputOption = ({
	Icon,
	title,
	color,
	IconClassName,
	titleClassName,
	className,
}: HeaderOptionProps) => {
	return (
		<div
			className={cn(
				'flex items-center space-x-3 hover:bg-customWhite-200 p-3 w-fit mt-1 transition hover:rounded cursor-pointer dark:hover:bg-customBlack-600 duration-200',
				className,
			)}>
			{Icon && (
				<Icon
					className={cn('text-gray-600 h-6 w-6 dark:text-white', IconClassName)}
					style={{ color: color }}
				/>
			)}
			<p className={cn('md:text-lg', titleClassName)}>{title}</p>
		</div>
	)
}

export default InputOption
