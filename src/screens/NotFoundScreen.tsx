import { Link } from 'react-router'

export default function NotFoundScreen() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-[#f3f6f8]">
			<div className="bg-white p-10 rounded-xl shadow-lg max-w-xl w-full text-center">
				<h1 className="text-6xl font-bold text-[#0077b5]">404</h1>
				<h2 className="text-2xl mt-4 text-[#2e343d]">Page Not Found</h2>
				<p className="mt-2 text-[#636c72]">
					The page you are looking for might have been removed, or you might
					have mistyped the address. Please check and try again.
				</p>
				<Link
					to="/"
					className="mt-6 inline-block px-6 py-2 text-lg font-medium text-white bg-[#0077b5] hover:bg-[#005c8f] rounded-md shadow-md transition duration-200 ease-in-out">
					Go to Homepage
				</Link>
			</div>
		</div>
	)
}
