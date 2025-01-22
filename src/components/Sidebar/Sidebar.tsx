import { useAuthState } from 'react-firebase-hooks/auth'
import { MdEvent } from 'react-icons/md'
import { HiOfficeBuilding } from 'react-icons/hi'
import { FiBell } from 'react-icons/fi'
import { BsPeople } from 'react-icons/bs'

import Avatar from '../UI/Avatar'
import Card from '../UI/Card'
import { auth } from '../../config'
import SidebarStar from './SidebarStar'
import SidebarHashtag from './SidebarHashtage'
import Activities from './Activities'

export default function Sidebar() {
	const [user] = useAuthState(auth)

	return (
		<div className="flex-[0.3] min-w-[20rem] w-[20rem] max-w-[20rem] flex-col items-center pb-12 hidden lg:flex">
			<div id="fixed-position" className="fixed max-w-[30rem] min-w-[20rem] ">
				<>
					<div className="w-[20rem] flex flex-col space-y-4 overflow-hidden">
						{/* User Profile Section */}
						<Card className="p-0 cursor-pointer">
							<figure>
								<img
									className="w-full object-cover rounded cursor-pointer h-28"
									src="/images/index.jpg"
									alt="profile image"
								/>
							</figure>

							<Avatar
								className="h-20 w-20 -mt-8 ml-7"
								url={user?.photoURL || '/images/linkedin-b.png'}
								alt="profile image"
								isOffLine={false}
							/>

							<div>
								<div className="border-b dark:border-customBlack-600 p-4 py-3 flex flex-col space-y-1">
									<h2 className="text-base font-bold ">{user?.displayName}</h2>
									<h5 className="font-medium text-sm ">{user?.email}</h5>

									<p className="text-[13px]">A welcoming, friendly, and</p>
									<p className="text-[13px]">
										all-encompassing approach to enterprise software design!
									</p>
								</div>

								<div className="text-[12px] py-[5px]">
									<SidebarStar text="Who viewed your profile" />
									<SidebarStar text="Views of your post" />
								</div>
							</div>
						</Card>

						{/* Skills Section */}
						<Card className="text-[13px] flex flex-col p-0 py-1">
							<SidebarHashtag
								text="Skills"
								className="font-semibold text-customBlue-950 hover:bg-transparent cursor-none text-sm"
								showHashtag={false}
							/>
							<SidebarHashtag text="JavaScript" />
							<SidebarHashtag text="React" />
							<SidebarHashtag text="Node.js" />
							<SidebarHashtag text="Public Speaking" />
							<div className="text-center cursor-pointer hover:bg-customWhite-300 dark:hover:bg-customBlack-600 transition px-4 py-3 pt4 text-xs font-semibold dark:text-white border-t dark:border-customBlack-600 mt-2">
								Discover more
							</div>
						</Card>

						<Card className="flex flex-col space-y-4">
							<Activities text="Saved items" Icon={HiOfficeBuilding} />
							<Activities text="Groups" Icon={BsPeople} />
							<Activities text="Events" Icon={MdEvent} />
							<Activities text="Notifications" Icon={FiBell} />{' '}
						</Card>
					</div>
				</>
			</div>
		</div>
	)
}
