import { Job } from '../../types/job'

export const JobItem: React.FC<{ job: Job }> = ({ job }) => (
	<div className="p-4 bg-white rounded-lg shadow-md dark:bg-customBlack-700 dark:text-white">
		<h3 className="text-xl font-bold">{job.title}</h3>
		<p className="text-sm text-gray-500 dark:text-gray-400">{job.company}</p>
		<p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
		<p className="text-sm">{job.description}</p>
		<p className="text-xs text-gray-400">{job.postedTime}</p>
		<span
			className={`text-sm ${
				job.status === 'open'
					? 'text-green-500'
					: job.status === 'closed'
					? 'text-red-500'
					: 'text-yellow-500'
			}`}>
			{job.status}
		</span>
	</div>
)
