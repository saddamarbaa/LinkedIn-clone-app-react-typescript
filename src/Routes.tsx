import { Route, Routes, useLocation } from 'react-router'

import NotFoundScreen from './screens/NotFoundScreen'
import PrivateRoute from './components/PrivateRoute'
import HomeScreen from './screens/HomeScreen'
import WelcomingScreen from './screens/WelcomingScreen'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LogInScreen'
import NotificationsScreen from './screens/NotificationsScreen'
import MessagesScreen from './screens/MessagesScreen'
import JobsScreen from './screens/JobsScreen'
import MyNetworkScreen from './screens/MyNetworkScreen'

export default function RouteLayout() {
	const location = useLocation()

	return (
		<Routes key={location.pathname} location={location}>
			{/* Protected Routes */}
			<Route path="/" element={<PrivateRoute />}>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/my-network" element={<MyNetworkScreen />} />
				<Route path="/jobs" element={<JobsScreen />} />
				<Route path="/messages" element={<MessagesScreen />} />
				<Route path="/notifications" element={<NotificationsScreen />} />
			</Route>

			{/* Public Routes */}
			<Route path="/register" element={<SignUpScreen />} />
			<Route path="/welcome" element={<WelcomingScreen />} />
			<Route path="/login" element={<LoginScreen />} />
			<Route path="*" element={<NotFoundScreen />} />
		</Routes>
	)
}
