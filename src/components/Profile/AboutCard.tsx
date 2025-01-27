import Card from '../UI/Card'

export const AboutCard = () => {
	return (
		<Card className="mt-6 p-0 overflow-hidden rounded-none">
			<div className="p-6 py-4">
				<h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
					About Me
				</h3>
				<p className="text-base text-gray-600 mt-2 dark:text-white ">
					I am a passionate software developer with a focus on full-stack
					development. I enjoy working on both frontend and backend technologies
					and always strive to improve my skills. I have worked with
					technologies such as JavaScript, React, Node.js, and have experience
					with both relational and NoSQL databases. In my free time, I love
					solving coding challenges and learning about new technologies.
				</p>
			</div>
		</Card>
	)
}
