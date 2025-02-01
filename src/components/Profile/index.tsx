import { ProfileCard } from './ProfileCard'
import { AboutCard } from './AboutCard'
import SkillsCard from './SkillsCard'
import RecommendationsCard from './RecommendationsCard'
import InterestsCard from './InterestsCard'

export default function UserProfile() {
	return (
		<>
			<ProfileCard />
			<AboutCard />
			<SkillsCard />
			<RecommendationsCard />
			<InterestsCard />
		</>
	)
}
