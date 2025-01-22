import { cn } from '../../lib/utils'

type Props = {
	text: string
	className?: string
	showHashtag?: boolean
}

export default function SidebarHashtag({
	text,
	className,
	showHashtag = true,
}: Props) {
	return (
		<p
			className={cn(
				' cursor-pointer   hover:bg-customWhite-300  dark:hover:bg-customBlack-600 transition px-4 py-[8px] text-xs font-semibold dark:text-white',
				className,
			)}>
			{showHashtag && <span>#</span>}
			<span> {text}</span>
		</p>
	)
}
