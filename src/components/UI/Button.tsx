import { ReactNode } from 'react'

type Props = {
	children: ReactNode
	onClick?: () => void
	disabled?: boolean
}

export default function Button({ children, onClick, disabled = false }: Props) {
	function handleClick() {
		if (onClick) {
			onClick()
		}
	}
	return (
		<button
			onClick={handleClick}
			disabled={disabled}
			aria-disabled={disabled}
			type="button"
			className="inline-flex items-center justify-center h-10 gap-2  tracking-wide transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-customBlue-500 hover:bg-customBlue-400 focus:bg-customBlue-400 disabled:cursor-not-allowed disabled:border-gray-300 text-white disabled:bg-gray-300 disabled:shadow-none font-bold p-4">
			<span className="font-bold">{children}</span>
		</button>
	)
}
