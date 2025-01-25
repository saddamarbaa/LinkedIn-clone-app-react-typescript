import React from 'react'
import Chat from '../components/Chat/Chat'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Widget from '../components/Widget/Widget'

type Props = {
	children: React.ReactNode
}
export function Layout({ children }: Props) {
	return (
		<>
			<Header />
			<div className="flex flex-row min-h-full items-stretch max-w-7xl overflow-hidden mx-auto   mt-5">
				<Sidebar />
				<div className="flex-1  shadow-lg max-w-3xl flex flex-col  mx-7 mb-52">
					{children}
				</div>
				<Widget />
			</div>
			<Chat />
		</>
	)
}

export default Layout
