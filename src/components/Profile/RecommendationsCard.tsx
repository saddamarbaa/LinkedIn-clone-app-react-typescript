import Card from '../UI/Card'

export default function RecommendationsCard() {
	return (
		<Card>
			<h3 className="text-xl font-semibold text-gray-800 mb-3 dark:text-white">
				Recommendations
			</h3>

			{/* Recommended Topics */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{/* Example Recommended Topics */}
				{[
					'ReactJS',
					'Node.js',
					'MongoDB',
					'Typescript',
					'Full Stack Development',
					'Next.js',
				].map((topic, index) => (
					<div
						key={index}
						className="bg-gray-100 p-4 rounded-lg text-center hover:bg-gray-200 transition duration-300 cursor-pointer">
						<p className="font-medium text-gray-800">{topic}</p>
						<p className="text-sm text-gray-500">{`Learn more about ${topic}`}</p>
					</div>
				))}
			</div>
		</Card>
	)
}
