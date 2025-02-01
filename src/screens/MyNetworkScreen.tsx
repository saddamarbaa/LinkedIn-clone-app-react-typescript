import React from 'react'
import Layout from '../layouts'
import NetworkItem from '../components/Network/NetworkItem'
import { mockedConnections } from '../lib/mockData/Connection'

const MyNetworkScreen: React.FC = () => {
	return (
		<Layout>
			<section className="w-full space-y-5">
				{mockedConnections.map((connection) => (
					<NetworkItem key={connection.id} connection={connection} />
				))}
			</section>
		</Layout>
	)
}

export default MyNetworkScreen
