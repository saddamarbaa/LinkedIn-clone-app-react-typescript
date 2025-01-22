import Button from '../components/UI/Button'
import DarkModeSwitch from '../components/UI/DarkModeSwitch'

import { FaArrowRight, FaArrowDown, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-router'

export default function WelcomingScreen() {
	return (
		<div className="overflow-hidden">
			<header className="w-full flex items-center justify-between mb-4 px-10">
				<Link to={'/'}>
					<div>
						<img
							src="images/welcoming-Linkedin-Logo.png"
							alt="Logo"
							className="object-contain w-24 md:w-32"
						/>
					</div>
				</Link>

				<div className="flex space-x-4 items-center">
					<DarkModeSwitch />

					<Link to={'/login'}>
						<Button>Join now</Button>
					</Link>
					<Link to={'/register'}>
						<Button>Sign In</Button>
					</Link>
				</div>
			</header>

			<div className="flex justify-between flex-wrap p-12">
				<div className="flex-1 pt-12 max-w-lg min-w-96">
					<h1 className="text-3xl  mb-6">
						Welcome to your professional community
					</h1>
					<button className="w-96 p-4 rounded-lg shadow-md mb-4 bg-white dark:bg-customBlack-700 flex items-center justify-between">
						Find a person you know <FaArrowRight />
					</button>
					<button className="w-96 p-4 rounded-lg shadow-md mb-4 bg-white flex items-center justify-between dark:bg-customBlack-700">
						Search for a job <FaArrowRight />
					</button>
					<button className="w-96 p-4 rounded-lg shadow-md mb-4 bg-white flex items-center justify-between dark:bg-customBlack-700">
						Learn a new skill <FaArrowRight />
					</button>
				</div>
				<div className="flex-1 max-w-xl min-w-96 mt-8 md:mt-0">
					<img
						src="images/welcoming.svg"
						alt="Logo"
						className="w-full h-full object-contain"
					/>
				</div>
			</div>

			<div className=" p-20 flex justify-around flex-wrap px[5%]">
				<div className="text-center ">
					<img
						src="https://static-exp1.licdn.com/sc/h/b1fxwht7hdbeusleja7ciftsj"
						alt="image"
						className="h-72 mb-4 mx-auto"
					/>
					<div>
						<h3 className="text-xl font-semibold">
							Connect with people who can help
						</h3>
					</div>
					<button className=" w-full md:w-96 p-4 rounded-lg shadow-md mb-4 bg-white flex items-center justify-between dark:bg-customBlack-700 mt-4">
						Find people you know <FaPhoneAlt />
					</button>
				</div>

				<div className="text-center">
					<img
						src="https://static-exp1.licdn.com/sc/h/dkfub4sc7jgzg3o31flfr91rv"
						alt="image"
						className="h-72 mb-4 mx-auto"
					/>
					<div>
						<h3 className="text-xl font-semibold">
							Learn the skills that can help you now
						</h3>
					</div>
					<button className="w-full md:w-96 p-4 rounded-lg shadow-md mb-4 bg-white flex items-center justify-between dark:bg-customBlack-700 mt-4">
						Choose a topic to learn <FaArrowDown />
					</button>
				</div>
			</div>

			<div className=" text-center py-20 px-[5%] bg-[#f1ece5] dark:bg-customBlack-700">
				<h3 className="text-2xl font-bold">
					Post your job and find the people you need
				</h3>
			</div>

			<footer className="p-20  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px[5%] ">
				<div>
					<img
						src="images/welcoming-Linkedin-Logo.png"
						alt="Logo"
						className="w-24 mx-auto"
					/>
				</div>
				<div>
					<h5 className="text-lg font-semibold">General</h5>
					<span className="block mt-2 cursor-pointer hover:underline">
						Sign Up
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Help Center
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						About
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Press
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Blog
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Careers
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Developers
					</span>
				</div>
				<div>
					<h5 className="text-lg font-semibold">Browse LinkedIn</h5>
					<span className="block mt-2 cursor-pointer hover:underline">
						Learning
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Jobs
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Salary
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Mobile
					</span>
					<span className="block mt-2 cursor-pointer hover:underline">
						Services
					</span>
				</div>
			</footer>

			<div className="text-center p-6 bg-[#f1ece5] dark:bg-customBlack-700  px[5%">
				<span className="text-sm ">LinkedIn &copy; 2021</span>
				<span className="cursor-pointer  hover:underline ml-4">About</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Accessibility
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					User Agreement
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Privacy Policy
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Cookie Policy
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Copyright Policy
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Brand Policy
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Guest Controls
				</span>
				<span className="cursor-pointer  hover:underline ml-4">
					Community Guidelines
				</span>
				<span className="cursor-pointer  hover:underline ml-4">Language</span>
			</div>
		</div>
	)
}
