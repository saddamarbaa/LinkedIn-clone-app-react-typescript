const ShimmerHeader = () => {
	return (
		<header className="bg-white sticky top-0 z-50 px-5 shadow dark:bg-customBlack-700 dark:shadow-lg">
			<div className="max-w-7xl mx-auto flex items-center justify-between py-3 space-x-3">
				<div className="flex items-center space-x-4 flex-1">
					{/* Logo shimmer */}
					<div className="w-10 h-10 bg-gray-300 shimmer rounded"></div>

					{/* Search bar shimmer */}
					<div className="flex-1 border max-w-sm rounded-md p-1 bg-gray-300 shimmer h-10 hidden sm:flex"></div>
				</div>

				<div className="flex items-center space-x-9">
					{/* Mobile Search Icon shimmer */}
					<div className="block lg:hidden w-8 h-8 bg-gray-300 shimmer rounded-full"></div>

					{/* Desktop Header Option Icons shimmer */}
					<div className="flex items-center space-x-6 hidden lg:flex">
						<div className="w-8 h-8 bg-gray-300 shimmer rounded-full"></div>
						<div className="w-8 h-8 bg-gray-300 shimmer rounded-full"></div>
						<div className="w-8 h-8 bg-gray-300 shimmer rounded-full"></div>
					</div>

					{/* Messaging and Notification icons shimmer */}
					<div className="w-8 h-8 bg-gray-300 shimmer rounded-full"></div>
					<div className="w-8 h-8 bg-gray-300 shimmer rounded-full"></div>

					{/* Dark Mode Switch shimmer */}
					<div className="hidden md:block w-8 h-8 bg-gray-300 shimmer rounded-full"></div>

					{/* Profile shimmer */}
					<div className="w-10 h-10 bg-gray-300 shimmer rounded-full"></div>
				</div>
			</div>
		</header>
	)
}

export default ShimmerHeader
