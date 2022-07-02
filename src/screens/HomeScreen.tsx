import React from 'react'

import Feed from '../components/Feed'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Widget from '../components/Widget'

export const HomeScreen = () => {
	return (
		<>
			<Header />
			<div className="app-bod">
				<Sidebar />
				<Feed />
				<Widget />
			</div>
		</>
	)
}

export default HomeScreen
