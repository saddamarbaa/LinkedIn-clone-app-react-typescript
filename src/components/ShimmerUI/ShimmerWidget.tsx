import ShimmerWidth from "./ShimmerWidth"


const ShimmerWidget = () => {
	return (
		<div className="flex-[0.3] min-w-[20rem] w-[20rem] max-w-[20rem] flex-col items-center pb-12 hidden lg:flex">
			<div id="fixed-position" className="fixed max-w-[30rem] min-w-[20rem] ">
				<div className="w-[20rem] flex flex-col space-y-4 overflow-hidden">
					{/* Shimmer for the first image */}
					<figure>
						<ShimmerWidth width="100%" height="12rem" />
					</figure>

					{/* Shimmer for the second image (hidden in actual widget) */}
					<figure className="hidden">
						<ShimmerWidth width="100%" height="12rem" />
					</figure>

					{/* Shimmer for the third image */}
					<figure>
						<ShimmerWidth width="100%" height="12rem" />
					</figure>

					{/* Shimmer for Card content */}
					<div className="p-4 bg-white rounded shadow-md">
						<div className="space-y-2">
							<ShimmerWidth width="75%" height="1.5rem" />
							<ShimmerWidth width="50%" height="1.25rem" />
						</div>
						<div className="mt-4 space-y-2">
							<ShimmerWidth width="80%" height="1rem" />
							<ShimmerWidth width="70%" height="1rem" />
							<ShimmerWidth width="60%" height="1rem" />
						</div>
						<div className="mt-4 space-y-2">
							<ShimmerWidth width="80%" height="1rem" />
							<ShimmerWidth width="70%" height="1rem" />
							<ShimmerWidth width="60%" height="1rem" />
						</div>
					</div>

					{/* Shimmer for footer links */}
					<div className="help-options p-4 text-sm">
						<div className="mb-4 space-y-2">
							<ShimmerWidth width="50%" height="1rem" />
							<ShimmerWidth width="40%" height="1rem" />
							<ShimmerWidth width="60%" height="1rem" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ShimmerWidget
