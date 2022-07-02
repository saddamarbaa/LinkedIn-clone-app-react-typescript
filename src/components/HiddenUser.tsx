import React, { useState, useEffect } from 'react'
import { Avatar, Card } from '@material-ui/core'
import styled from 'styled-components'

import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'

const HiddenUser = () => {
	const [isThisSaddam, setIsThisSaddam] = useState(false)
	const user = useSelector(selectUser)

	useEffect(() => {
		if (
			user?.displayName?.includes('saddam') ||
			user?.email?.includes('saddam')
		) {
			setIsThisSaddam(true)
		}
	}, [user])

	return (
		<Wrapper>
			<Card className="sidebar__top">
				<img
					className="sidebar__background-img"
					src="/images/index.jpg"
					alt="profile image"
				/>
				<Avatar
					className="sidebar__avatar"
					src={user?.photoURL || '/images/linkedin-b.png'}
					alt="profile image"
				/>
				{isThisSaddam && (
					<div className="sidebar__headline">
						<h2>Web Development Coach | Saddam Arbaa</h2>
						<h5> Full-Stack Developer | Front-End Developer</h5>
						<p>Reactjs + Redux + Next js + JavaScript + TypeScript</p>
						<p>Node.js + Express + MongoDB</p>
						<p>
							A welcoming, friendly, and all-encompassing approach to enterprise
							software design!
						</p>
					</div>
				)}

				{!isThisSaddam && (
					<div className="sidebar__headline">
						<h2>{user?.displayName}</h2>
						<h5>{user?.email}</h5>

						<p>A welcoming, friendly.</p>
					</div>
				)}
			</Card>
		</Wrapper>
	)
}

export default React.memo(HiddenUser)

const Wrapper = styled.div`
	@media (min-width: 578px) {
		display: none;
	}

	width: 100%;
	font-size: 14px;

	.sidebar__top {
		margin-bottom: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;

		.sidebar__background-img {
			width: 100%;
			object-fit: cover;
			height: 100px;
		}

		.sidebar__avatar {
			width: 80px;
			height: 80px;
			border-radius: 50%;
			margin-bottom: 20px;
			margin-top: -30px;
		}

		.sidebar__headline {
			width: 100%;
			position: relative;
			padding-bottom: 15px;
			padding: 1rem;
			border-bottom: 1px solid #cfcecc;

			h2 {
				font-size: 1rem;
				text-align: center;
			}
			h5 {
				font-size: 0.8rem;
				text-align: center;
				line-height: 1.7;
			}
			p {
				line-height: 1.5;
			}
		}
	}
`
