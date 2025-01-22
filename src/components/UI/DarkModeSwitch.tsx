import { useEffect, useState } from 'react'
import { FiSun } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { BsFillMoonFill } from 'react-icons/bs'

export default function DarkModeSwitch() {
	const { systemTheme, theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	const renderThemeChanger = () => {
		if (!mounted) return null

		const currentTheme = theme === 'system' ? systemTheme : theme

		const handleThemeToggle = () => {
			const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
			setTheme(newTheme)
		}

		if (currentTheme === 'dark') {
			return (
				<div
					className="flex flex-col items-center cursor-pointer"
					onClick={handleThemeToggle}>
					<FiSun
						className="h-6 w-6 cursor-pointer text-yellow-500 transition-colors hover:text-amber-500 focus:text-amber-500  focus:outline-none sm:text-2xl hidden md:block"
						role="button"
						aria-label="Switch to light mode"
					/>
					<span className="text-xs hidden lg:block text-gray-800 dark:text-white">
						Dark Mode
					</span>
				</div>
			)
		}

		return (
			<div
				className="flex flex-col items-center cursor-pointer"
				onClick={handleThemeToggle}>
				<BsFillMoonFill
					className="h-6 w-6 cursor-pointer transition-colors   focus:outline-none sm:text-2xl hidden md:block"
					role="button"
					aria-label="Switch to dark mode"
				/>
				<span className="text-xs hidden lg:block text-gray-800 dark:text-white">
					Dark Mode
				</span>
			</div>
		)
	}

	return (
		<div className="flex justify-center items-center">
			{renderThemeChanger()}
		</div>
	)
}
