import { clsx } from 'clsx'

type Props = {
	url: string
	width?: string | number // Allow user to pass width
	height?: string | number // Allow user to pass height
	className?: string // Allow user to pass custom className
}

export default function Avatar({
	url = '/images/linkedin-b.png',
	width = 11,
	height = 11,
	className,
}: Props) {
	return (
		<img
			src={url}
			alt="user name"
			title="user name"
			className={clsx(
				'relative inline-flex items-center justify-center   rounded-full bg-emerald-500 h-11 w-11',
				className,
				typeof width === 'number' ? `w-${width}` : `w-[${width}]`, // Custom width logic
				typeof height === 'number' ? `h-${height}` : `h-[${height}]`, // Custom height logic
			)}
		/>
	)
}
