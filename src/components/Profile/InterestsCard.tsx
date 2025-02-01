import Card from '../UI/Card'

export default function InterestsCard() {
	return (
		<Card>
			<h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-white">
				Interests
			</h3>
			<div className="flex flex-wrap gap-4">
				{[
					'Tech',
					'AI',
					'Full Stack Development',
					'Open Source',
					'Mentorship',
				].map((interest) => (
					<a
						key={interest}
						href="#"
						className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition duration-300">
						{interest}
					</a>
				))}
			</div>
		</Card>
	)
}
