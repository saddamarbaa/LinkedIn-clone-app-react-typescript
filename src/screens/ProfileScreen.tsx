import Header from '../components/Header/Header'
import Widget from '../components/Widget/Widget'
import UserProfile from '../components/Profile'

export default function ProfileScreen() {
	return (
		<>
			<Header />
			<div className="flex flex-row min-h-full items-start max-w-7xl mx-auto mt-8">
				<div className="flex-1 flex flex-col mx-8 mb-52 space-y-8">
					<UserProfile />
				</div>
				{/* Widget Section */}
				<Widget />
			</div>
		</>
	)
}
