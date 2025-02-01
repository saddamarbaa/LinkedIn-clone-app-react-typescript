import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, Outlet } from 'react-router'

import { auth } from '../config'

import ShimmerLoader from './ShimmerUI/ShimmerLoader'

export default function PrivateRoute() {
	const [user, loading, error] = useAuthState(auth)

	// console.log(user, loading, error);

	if (loading) {
		return <ShimmerLoader />
	}

	if (error) {
		return (
			<div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-6 py-12">
				<p className="mt-8 w-full max-w-lg rounded border  p-6 text-center font-bold">
					Error
				</p>
			</div>
		)
	}

	// console.log('private route', user)

	if (!user && !loading) {
		return <Navigate to="/login" />
	}

	return (
		<section>
			<Outlet />
		</section>
	)
}
