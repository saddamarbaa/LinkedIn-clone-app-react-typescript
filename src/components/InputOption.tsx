type HeaderOptionProps = {
	Icon: React.ElementType
	color?: string
	title: string
}

const InputOption = ({ Icon, title, color }: HeaderOptionProps) => {
	return (
		<div className="flex items-center space-x-3 hover:bg-customWhite-200 p-3 w-fit mt-1 transition hover:rounded cursor-pointer dark:hover:bg-customBlack-600 duration-200">
			{Icon && (
				<Icon
					className="text-gray-600 h-6 w-6 dark:text-white"
					style={{ color: color }}
				/>
			)}
			<p className="md:text-lg">{title}</p>
		</div>
	)
}

export default InputOption
