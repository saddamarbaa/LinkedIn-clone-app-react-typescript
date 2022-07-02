import React from 'react'
// @ts-ignore
import { Circle } from 'better-react-spinkit'

const Loading = () => {
	return (
		<div
			style={{
				background: '#f8f8f8',
				width: '100vw',
				height: '100vh',
				display: 'grid',
				placeItems: 'center',
			}}>
			<div
				style={{
					padding: '75px',
					paddingTop: '00px',
					textAlign: 'center',
					background: 'white',
					borderRadius: '6px',
					boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
					display: 'grid',
					placeItems: 'center',
				}}>
				<div
					className="logo"
					style={{
						position: 'relative',
						cursor: 'pointer',
						marginBottom: '3rem',
						width: '11rem',
						height: '9rem',
						display: 'block',
					}}>
					<img
						style={{
							position: 'relative',
							cursor: 'pointer',
							width: '100%',
							height: '100%',
							objectFit: 'contain',
						}}
						src="images/welcoming-Linkedin-Logo.png"
						alt="Picture of the LinkedIn "
					/>
				</div>

				<div>
					<Circle color="#0a66c2" size={60} />
				</div>
			</div>
		</div>
	)
}

export default Loading
