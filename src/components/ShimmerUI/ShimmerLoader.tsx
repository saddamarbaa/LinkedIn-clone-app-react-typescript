import Spinner from '../UI/Spinner'
import FeedShimmer from './FeedShimmer'
import ShimmerHeader from './ShimmerHeader'
import ShimmerWidget from './ShimmerWidget'
import SidebarShimmer from './SidebarShimmer'

function ShimmerLoader() {
	return (
		<>
			<ShimmerHeader />
			<div className="flex flex-row min-h-full items-stretch max-w-7xl overflow-hidden mx-auto   mt-5  w-full">
				<SidebarShimmer />
				<div className="flex-1   max-w-3xl flex flex-col  mx-7 mb-52">
					<FeedShimmer />
				</div>
				<ShimmerWidget />
				<Spinner />
			</div>
		</>
	)
}

export default ShimmerLoader
