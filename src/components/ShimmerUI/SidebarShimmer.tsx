import ShimmerWidth from './ShimmerWidth'
import Card from '../UI/Card'

export default function SidebarShimmer() {
	return (
		<div className="flex-[0.3] min-w-[20rem] w-[20rem] max-w-[20rem] flex-col items-center pb-12 hidden lg:flex">
			<div id="fixed-position" className="fixed max-w-[30rem] min-w-[20rem] ">
				<>
					<div className="w-[20rem] flex flex-col space-y-4 overflow-hidden">
						{/* Shimmer for Profile Section */}
						<Card className="p-0 cursor-pointer">
							<ShimmerWidth width="100%" height="7rem" className="rounded" />
							<div className="p-4 py-3">
								<ShimmerWidth
									width="5rem"
									height="5rem"
									className="rounded-full -mt-8 ml-7"
								/>
								<div className="flex flex-col space-y-1 mt-4">
									<ShimmerWidth width="60%" height="1rem" />
									<ShimmerWidth width="40%" height="1rem" />
								</div>
							</div>
							<div className="text-[12px] py-[5px]">
								<ShimmerWidth width="80%" height="1rem" className="my-1" />
								<ShimmerWidth width="70%" height="1rem" className="my-1" />
							</div>
						</Card>

						{/* Shimmer for Skills Section */}
						<Card className="text-[13px] flex flex-col p-0 py-1">
							<div className="px-4 py-2">
								<ShimmerWidth
									width="40%"
									height="1rem"
									className="font-semibold"
								/>
							</div>
							<div className="px-4 py-1">
								<ShimmerWidth width="80%" height="1rem" className="my-1" />
								<ShimmerWidth width="80%" height="1rem" className="my-1" />
								<ShimmerWidth width="80%" height="1rem" className="my-1" />
								<ShimmerWidth width="80%" height="1rem" className="my-1" />
							</div>
							<div className="text-center cursor-pointer transition px-4 py-3 text-xs font-semibold border-t mt-2">
								<ShimmerWidth width="60%" height="1rem" className="mx-auto" />
							</div>
						</Card>

						{/* Shimmer for Activities Section */}
						<Card className="flex flex-col space-y-4">
							<ShimmerWidth width="100%" height="1.5rem" />
							<ShimmerWidth width="100%" height="1.5rem" />
							<ShimmerWidth width="100%" height="1.5rem" />
							<ShimmerWidth width="100%" height="1.5rem" />
						</Card>
					</div>
				</>
			</div>
		</div>
	)
}
