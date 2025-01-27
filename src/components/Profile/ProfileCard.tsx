import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { Link } from 'react-router'

import Avatar from '../UI/Avatar'
import Card from '../UI/Card'
import { auth } from '../../config'
import { useMemo } from 'react'
import { getRandomIntNumberBetween } from '../../utils'

export const ProfileCard = () => {
	const [user] = useAuthState(auth)

	// Generate random counts for followers and connections
	const randomFollowersCount = useMemo(
		() => getRandomIntNumberBetween(1000, 0),
		[],
	)
	const randomConnectionsCount = useMemo(
		() => getRandomIntNumberBetween(1000, 0),
		[],
	)

	// Function to handle logout
	const handleLogout = () => {
		signOut(auth).catch((error) => {
			console.error('Error signing out: ', error)
		})
	}

	console.log(user)
	return (
		<Card className="p-0 overflow-hidden rounded-none">
			<figure>
				<img
					className="w-full object-cover rounded-t-xl"
					src="/images/index.jpg"
					alt="Profile cover"
				/>
			</figure>
			<div className="relative">
				<Avatar
					url={user?.photoURL || '/images/linkedin-b.png'}
					className="h-32 w-32 -mt-8 ml-7"
				/>
			</div>
			<div className="p-6 py-4">
				<h2 className="text-4xl font-extrabold text-gray-800 dark:text-white">
					{user?.displayName}
				</h2>
				<p className="text-gray-600 mt-2 text-base dark:text-white">
					Passionate about coding, learning new technologies, and building
					impactful projects. Always open to collaborating and sharing
					knowledge.
				</p>

				{/* GitHub Link */}
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 font-medium mt-2 block hover:underline flex items-center space-x-2">
					<FaGithub />
					<span>{`https://github.com/${user?.displayName}`}</span>
				</a>

				{/* LinkedIn Profile */}
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-600 font-medium mt-2 block hover:underline flex items-center space-x-2">
					<FaLinkedin />
					<span>LinkedIn Profile</span>
				</a>

				{/* Skills Section */}
				<div className="mt-4 flex flex-wrap gap-2">
					<span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-200 transition duration-300">
						JavaScript
					</span>
					<span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full hover:bg-green-200 transition duration-300">
						React
					</span>
					<span className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 transition duration-300">
						Node.js
					</span>
				</div>

				{/* Followers & Connections */}
				<div className="mt-4 flex space-x-10">
					<div className="text-center">
						<p className="font-semibold text-gray-700 dark:text-white">
							Followers
						</p>
						<p className="text-lg text-gray-800 dark:text-white">
							{randomFollowersCount}
						</p>
					</div>
					<div className="text-center">
						<p className="font-semibold text-gray-700 dark:text-white">
							Connections
						</p>
						<p className="text-lg text-gray-800 dark:text-white">
							{randomConnectionsCount}
						</p>
					</div>
				</div>

				{/* Open to Work Section */}
				<div className="mt-6 text-center py-4 bg-green-100 rounded-lg">
					<p className="text-lg font-semibold text-green-600">Open to Work</p>
					<p className="text-sm text-gray-700">
						Looking for full-stack development opportunities.
					</p>
				</div>

				<div className="mt-6 text-center flex justify-center space-x-4">
					{/* Action Button */}
					<Link to="/messages">
						<button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
							Message Me
						</button>
					</Link>
					{/* Log Out Button */}
					<button
						onClick={handleLogout}
						className="bg-red-600 text-white px-7 py-2 rounded-full hover:bg-red-700 transition duration-300">
						Log Out
					</button>
				</div>
			</div>
		</Card>
	)
}
