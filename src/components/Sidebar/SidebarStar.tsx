import { cn } from '../../lib/utils'
import { getRandomIntNumberBetween } from '../../utils'

type Props = {
	text: string
	className?: string
}
export default function SidebarStar({ text, className }: Props) {
	return (
		<div
			className={cn(
				'flex items-center justify-between cursor-pointer   hover:bg-customWhite-300  dark:hover:bg-customBlack-600 transition px-4 py-[5px] ',
				className,
			)}>
			<p className="font-bold">{text}</p>
			<p className="font-semibold text-customBlue-950 dark:text-white">
				{getRandomIntNumberBetween(10, 250) + 10}
			</p>
		</div>
	)
}
