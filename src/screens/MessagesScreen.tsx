import MessageItem from '../components/Message/MessageItem'
import Layout from '../layouts'
import { mockedMessages } from '../lib/mockData/Message'

export default function MessagesScreen() {
	return (
		<Layout>
			<section className="w-full space-y-5">
				{mockedMessages.map((message) => (
					<MessageItem key={message.id} message={message} />
				))}
			</section>
		</Layout>
	)
}
