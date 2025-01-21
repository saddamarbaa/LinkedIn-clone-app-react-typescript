export default function Sidebar() {
	return (
		<div className="flex-[0.3] min-w-[20rem] w-[20rem] max-w-[20rem] flex-col items-center pb-12 hidden lg:flex">
			<div id="fixed-position" className="fixed max-w-[30rem] min-w-[20rem] ">
				<>
					<div className="w-[20rem] flex flex-col space-y-4 overflow-hidden">
						<figure>
							<img
								className="w-full h-full object-contain  rounded cursor-pointer "
								src="images/job.jpg"
								alt="jobs image"
							/>
						</figure>
					</div>
				</>
			</div>
		</div>
	)
}
