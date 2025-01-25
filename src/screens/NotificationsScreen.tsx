import NotificationItem from '../components/Notification/NotificationItem'
import Layout from '../layouts'
import { mockedNotifications } from '../lib/mockData'

export default function NotificationsScreen() {
	return (
		<Layout>
			<div className="w-full  space-y-5">
				{mockedNotifications.map((notification) => (
					<NotificationItem key={notification.id} notification={notification} />
				))}
			</div>
		</Layout>
	)
}
