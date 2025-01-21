import Chat from '../components/Chat'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Card from '../components/UI/Card'
import Widget from '../components/Widget'

export default function HomeScreen() {
	return (
		<>
			<Header />
			<div className="flex flex-row min-h-full items-stretch max-w-7xl overflow-hidden mx-auto   mt-5">
				<Sidebar />
				<Feed />
				<Widget />
			</div>

			<div className=" hidden flex-row min-h-full items-stretch max-w-7xl overflow-hidden mx-auto   mt-5">
				<div className="flex-[0.3] min-h-screen min-w-[20rem] w-[20rem] max-w-[20rem] flex flex-col items-center pb-12 hidden lg:flex bg-green-500">
					1
				</div>
				<div className="flex-1 bg-white shadow-lg max-w-3xl">2</div>
				<div className="flex-[0.3] min-w-[20rem] w-[20rem] max-w-[20rem] flex-col items-center pb-12 hidden lg:flex">
					<div
						id="fixed-position"
						className="fixed max-w-[30rem] min-w-[20rem] ">
						<>
							<div className="w-[20rem] flex flex-col space-y-4 overflow-hidden">
								<figure>
									<img
										className="w-full h-full object-contain  rounded cursor-pointer"
										src="images/job.jpg"
										alt="jobs image"
									/>
								</figure>

								<figure>
									<img
										className="object-cover object-center w-full h-full max-w-full rounded-lg cursor-pointer"
										src="https://id.safenet.or.id/wp-content/uploads/2020/03/covid19.jpg"
										alt="covid 19 image"
									/>
								</figure>

								<figure>
									<img
										className="object-cover object-center w-full h-full max-w-full rounded-lg cursor-pointer"
										src="https://inspirationfeed.com/wp-content/uploads/2015/08/LinkedIn.jpg"
										alt="covid 19 image"
									/>
								</figure>

								<Card>
									<h3 className="mb-4 text-lg font-semibold">
										Grow your skills and advance your career with LinkedIn
										Learning
									</h3>
									<h4 className="mb-4 text-md font-medium">
										Today’s top courses
									</h4>
									<div className="mb-4">
										<p className="leading-relaxed text-sm">
											1. Problem Solving & Troubleshooting
										</p>
										<span className="text-blue-600 text-sm">Jeff Ansell</span>
									</div>
									<div className="mb-4">
										<p className="leading-relaxed text-sm">
											2. Agile Foundations
										</p>
										<span className="text-blue-600 text-sm">Doug Rose</span>
									</div>
									<div className="mb-4">
										<p className="leading-relaxed text-sm">
											3. Communicating with Confidence
										</p>
										<span className="text-blue-600 text-sm">
											Tatiana Kolovou
										</span>
									</div>
								</Card>

								<div className="help-options p-4 text-sm">
									<p className="mb-4">
										<span className="mr-3 cursor-pointer hover:text-blue-600 hover:underline">
											About
										</span>
										<span className="mr-3 cursor-pointer hover:text-blue-600 hover:underline">
											Help Center
										</span>
										<span className="mr-3 cursor-pointer hover:text-blue-600 hover:underline">
											Accessibility
										</span>
									</p>
									<p className="mb-4">
										<span className="mr-3 cursor-pointer hover:text-blue-600 hover:underline">
											Ad Choices
										</span>
										<span className="mr-3 cursor-pointer hover:text-blue-600 hover:underline">
											Advertising
										</span>
									</p>
									<p className="text-sm">LinkedIn Corporation &copy; 2021</p>
								</div>
							</div>
						</>
					</div>
				</div>
			</div>

			<Chat />
		</>
	)
}
