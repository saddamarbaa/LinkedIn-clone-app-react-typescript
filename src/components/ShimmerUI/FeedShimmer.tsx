import ShimmerWidth from './ShimmerWidth'
import Card from '../UI/Card'

export default function FeedShimmer() {
	const shimmerCount = 4

	return (
		<div className="flex-1 shadow-lg flex flex-col mb-52 ">
			{/* Shimmer for PostInput */}
			<Card className="p-4 mb-4">
				<ShimmerWidth width="100%" height="2rem" className="mb-2" />
				<ShimmerWidth width="90%" height="1.5rem" />
			</Card>

			{/* Shimmer for posts */}
			{Array.from({ length: shimmerCount }).map((_, index) => (
				<Card key={index} className="p-4 mb-4">
					{/* Shimmer for post header */}
					<div className="flex items-center space-x-4 mb-4">
						<ShimmerWidth width="3rem" height="3rem" className="rounded-full" />
						<div className="flex flex-col">
							<ShimmerWidth width="8rem" height="1rem" />
							<ShimmerWidth width="5rem" height="1rem" className="mt-1" />
						</div>
					</div>

					{/* Shimmer for post content */}
					<ShimmerWidth width="100%" height="1rem" className="mb-2" />
					<ShimmerWidth width="100%" height="1rem" className="mb-2" />
					<ShimmerWidth width="80%" height="1rem" className="mb-2" />

					{/* Shimmer for post footer */}
					<div className="flex space-x-4 mt-4">
						<ShimmerWidth width="4rem" height="1.5rem" />
						<ShimmerWidth width="4rem" height="1.5rem" />
						<ShimmerWidth width="4rem" height="1.5rem" />
					</div>
				</Card>
			))}
		</div>
	)
}
