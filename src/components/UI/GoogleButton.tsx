import { MouseEventHandler } from 'react'

type Props = {
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function GoogleButton({ onClick }: Props) {
	return (
		<button
			onClick={onClick ? onClick : undefined}
			type="button"
			className="flex items-center justify-center  px-4 py-[0.6rem] bg-white border border-customBlue-500 hover:border-2 hover:bg-customBlue-100  duration-300 dark:bg-customBlack-700 dark:border-gray-300 transition">
			<img
				src="/images/google.png"
				alt="Google Logo"
				className="w-6 h-6 mr-2"
			/>
			<a className="text-customBlue-500 hover:text-customBlue-700 transition duration-300 font-bold dark:text-white">
				Join with Google
			</a>
		</button>
	)
}
