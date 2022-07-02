import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDispatch } from 'react-redux'

import { setLogInState, setLogOutState } from './features/user/userSlice'
import SignUpScreen from './screens/SignUpScreen'
import LogInScreen from './screens/LogInScreen'
import ScrollToTop from './components/ScrollToTop'
import WelcomingScreen from './screens/WelcomingPageScreen'
import HomeScreen from './screens/HomeScreen'
import { auth } from './config'
import Loading from './components/Loading'

function App() {
	const dispatch = useDispatch()
	const [user, loading, error] = useAuthState(auth)

	// console.log(user, loading, error)
	// console.log(user?.photoURL)
	useEffect(() => {
		if ((user && user?.email) || user?.displayName || user?.uid) {
			const splitName = user?.email && user?.email.split('@')
			dispatch(
				setLogInState({
					displayName: user?.displayName || (splitName && splitName[0]) || '',
					email: user?.email || user?.displayName || '',
					uid: user?.uid,
					photoURL: user?.photoURL || '',
				}),
			)
		} else {
			dispatch(setLogOutState())
		}
	}, [user])

	if (loading) {
		return <Loading />
	}

	return (
		<AppWrapper>
			<ScrollToTop />
			{!user ? (
				<WelcomingScreen />
			) : (
				<Routes>
					<Route path="/" element={<HomeScreen />} />
					<Route path="/register" element={<SignUpScreen />} />
					<Route path="/login" element={<LogInScreen />} />
					<Route path="/welcome" element={<WelcomingScreen />} />
				</Routes>
			)}
		</AppWrapper>
	)
}

export default App

const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
	background: #f3f2ef;

	.app-bod {
		margin-top: 2rem;
		min-height: 85vh;
		width: 100%;
		max-width: 1200px;
		display: flex;
		justify-content: space-between;
		border-left: 0;
		min-height: 100%;
		align-items: stretch;
		overflow: hidden;
	}
`
