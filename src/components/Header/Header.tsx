import DarkModeSwitch from '../UI/DarkModeSwitch'
import { BiSearch } from 'react-icons/bi'
import HeaderOption from './HeaderOption'
import { FaShoppingBag } from 'react-icons/fa'
import {
	FaSearch,
	FaHome,
	FaBell,
	FaSuitcase,
	FaComments,
	FaUsers,
} from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config'
import { Link } from 'react-router'

export default function Header() {
	const [user] = useAuthState(auth)

	const userSignedOutHandler = async () => {
		if (user) {
			await auth.signOut()
		}
	}

	return (
		<header className="bg-white sticky top-0 z-50 px-5 shadow dark:bg-customBlack-700 dark:shadow-lg">
			<div className="max-w-7xl mx-auto flex items-center justify-between py-3 space-x-3 ">
				<div className="flex items-center space-x-4 flex-1">
					<Link to={'/'}>
						<img
							src="/images/logo.png"
							alt="logo"
							className="w-8 h-8  md:h-10 md:w-10 object-contain"
						/>
					</Link>

					<div className="flex-1 items-center border max-w-sm rounded-md cursor-pointer p-1 space-x-2 bg-[#eef3f8] min-w-[150px] hidden sm:flex hover:bg-[rgba(220,227,232,1)] focus:bg-[rgba(220,227,232,1)] transition duration-200 dark:bg-customBlack-700 dark:border-customBlack-500 dark:hover:bg-[rgba(100,100,100,1)]">
						<BiSearch className="text-base ml-1" />
						<input
							type="text"
							placeholder="Search"
							className="w-full outline-none border-0 bg-transparent p-1"
						/>
					</div>
				</div>

				<div className="flex items-center space-x-9">
					{/* Mobile Search Icon */}
					<div className="block lg:hidden">
						<HeaderOption Icon={FaSearch} />
					</div>

					{/* Desktop Header Options */}
					<Link to="/">
						<HeaderOption Icon={FaHome} title="Home" />
					</Link>

					{/* Desktop View Only - My Network */}
					<div className="hidden lg:block">
						<Link to="/my-network">
							<HeaderOption Icon={FaUsers} title="My Network" />
						</Link>
					</div>

					{/* Desktop View Only - Jobs */}
					<div className="hidden lg:block">
						<Link to="/jobs">
							<HeaderOption Icon={FaSuitcase} title="Jobs" />
						</Link>
					</div>

					{/* Messaging Icon */}
					<Link to="/messages">
						<HeaderOption Icon={FaComments} title="Messaging" />
					</Link>

					{/* Notifications Icon */}
					<Link to="/notifications">
						<HeaderOption Icon={FaBell} title="Notifications" isBorderTrue />
					</Link>

					<div className="hidden md:block">
						<DarkModeSwitch />
					</div>

					{/* Log Out */}
					<div className="mr-2" onClick={userSignedOutHandler}>
						<HeaderOption
							NoMarginRight
							avatar={user?.photoURL || '/images/index.jpg'}
							title="Profile"
						/>
					</div>
				</div>

				<div className="hidden flex-1 justify-end items-center space-x-8">
					<Link to="/">
						<HeaderOption Icon={FaHome} title="Home" />
					</Link>
					<div className="hidden lg:block">
						<Link to="/my-network">
							<HeaderOption Icon={FaUsers} title="My Network" />
						</Link>
					</div>
					<div className="hidden lg:block">
						<Link to="/jobs">
							<HeaderOption Icon={FaSuitcase} title="Jobs" showNotification />
						</Link>
					</div>
					<Link to="/messages">
						<HeaderOption Icon={FaComments} title="Messaging" />
					</Link>
					<Link to="/notifications">
						<HeaderOption
							Icon={FaBell}
							title="Notifications"
							showNotification={true}
						/>
					</Link>

					<div className="hidden lg:block">
						<Link to="/my-network">
							<HeaderOption Icon={FaUsers} title="My Network" />
						</Link>
					</div>

					<div className="hidden md:block">
						<Link to="/shop">
							<HeaderOption NoMarginRight Icon={FaShoppingBag} title="Jobs" />
						</Link>
					</div>

					<div className="hidden md:block">
						<DarkModeSwitch />
					</div>
				</div>
			</div>
		</header>
	)
}
