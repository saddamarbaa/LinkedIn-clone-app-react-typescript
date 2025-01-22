import { clsx } from 'clsx'
import { CircleIcon } from './CircleIcon'

type AvatarProps = {
	url: string
	alt?: string
	className?: string
	isOffLine?: boolean
	circleIconClassNames?: string
}

export default function Avatar({
	url = '/images/linkedin-b.png',
	className,
	alt,
	isOffLine,
	circleIconClassNames = '',
}: AvatarProps) {
	return (
		<div className="relative inline-block">
			<img
				src={url}
				alt={alt}
				title={alt}
				className={clsx(
					'relative inline-flex items-center justify-center rounded-full h-11 w-11',
					className,
				)}
			/>
			{/* Conditionally show CircleIcon based on the isOffLine prop */}
			{isOffLine !== undefined && (
				<CircleIcon isOffLine={isOffLine} className={circleIconClassNames} />
			)}
		</div>
	)
}
