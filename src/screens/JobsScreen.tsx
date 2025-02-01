import { JobItem } from '../components/Job'
import Layout from '../layouts'
import { mockedJobs } from '../lib/mockData'

const JobsScreen: React.FC = () => {
	return (
		<Layout>
			<section className="w-full  space-y-5">
				{mockedJobs.map((job) => (
					<JobItem key={job.id} job={job} />
				))}
			</section>
		</Layout>
	)
}

export default JobsScreen
