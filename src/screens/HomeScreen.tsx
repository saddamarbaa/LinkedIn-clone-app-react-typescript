import Chat from '../components/Chat/Chat'
import Feed from '../components/Feed/Feed'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Widget from '../components/Widget/Widget'

export default function HomeScreen() {
	return (
		<>
			<Header />
			<div className="flex flex-row min-h-full items-stretch max-w-7xl overflow-hidden mx-auto   mt-5">
				<Sidebar />
				<Feed />
				<Widget />
			</div>
			<Chat />
		</>
	)
}
