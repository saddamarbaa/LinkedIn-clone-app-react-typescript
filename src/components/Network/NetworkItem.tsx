import Card from '../UI/Card'
import { ConnectionT } from '../../lib/mockData/Connection'

type Props = {
	connection: ConnectionT
}

export default function NetworkItem({ connection }: Props) {
	const { name, title, company, location, profilePicUrl, status } = connection
	return (
		<Card className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
			<img
				src={profilePicUrl}
				alt={name}
				className="w-12 h-12 rounded-full object-cover"
			/>
			<div className="flex-grow">
				<h3 className="text-lg font-semibold">{name}</h3>
				<p>
					{title} at {company}
				</p>
				<p className="text-gray-500">{location}</p>
			</div>
			<span
				className={`px-3 py-1 rounded-full text-white ${
					status === 'Connected'
						? 'bg-green-500'
						: status === 'Pending'
						? 'bg-yellow-500'
						: 'bg-blue-500'
				}`}>
				{status}
			</span>
		</Card>
	)
}
