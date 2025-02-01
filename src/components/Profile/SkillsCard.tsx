import Card from '../UI/Card'

const skills = [
	'JavaScript',
	'Reactjs',
	'Node.js',
	'Express',
	'MongoDB',
	'TypeScript',
	'Redux',
	'Next.js',
	'Vue.js',
	'Angular',
	'HTML5',
	'CSS3',
	'Sass',
	'TailWind CSS',
	'Git',
	'GitHub',
	'GitLab',
	'Docker',
	'Kubernetes',
	'AWS',
	'Azure',
	'Google Cloud Platform (GCP)',
	'CI/CD',
	'Jenkins',
	'PostgreSQL',
	'MySQL',
	'Redis',
	'GraphQL',
	'RESTful APIs',
	'WebSockets',
	'Firebase',
	'MongoDB Atlas',
	'GraphQL',
	'OAuth2',
	'JWT (JSON Web Tokens)',
	'Nginx',
	'Jira',
	'Agile/Scrum',
	'Microservices Architecture',
	'DevOps',
	'Web Security',
	'Serverless Architecture',
	'Unit Testing',
	'Jest',
	'Mocha',
	'Chai',
	'Cypress',
	'Test-Driven Development (TDD)',
	'Server-Side Rendering (SSR)',
	'Web Performance Optimization',
	'Linux',
	'Python',
	'Java',
	'C#',
	'Machine Learning',
	'Data Structures & Algorithms',
]

export default function SkillsCard() {
	return (
		<Card>
			<h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
			<div className="flex flex-wrap gap-3">
				{skills.map((skill, index) => (
					<span
						key={index}
						className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
						{skill}
					</span>
				))}
			</div>
		</Card>
	)
}
