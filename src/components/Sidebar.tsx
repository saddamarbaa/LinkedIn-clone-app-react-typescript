import React, { useState, useEffect } from 'react'
import { Avatar, Card } from '@material-ui/core'
import styled from 'styled-components'
import TurnedInIcon from '@material-ui/icons/TurnedIn'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import MenuBookIcon from '@material-ui/icons/MenuBook'
import { useSelector } from 'react-redux'

import { selectUser } from '../features/user/userSlice'
import { getRandomIntNumberBetween } from '../utils'

const Sidebar = () => {
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
		<SideBarWrapper>
			<div id="fixed-position">
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
							<h2>Saddam Arbaa</h2>
							<h5> Rich Experienced Web Application Engineer </h5>
							<h5>Mobile App Developer</h5>
							<h5>Blockchain Engineer </h5>
							<p>Reactjs + ReactNative + Nextjs</p>
							<p>JavaScript + TypeScript </p>
							<p>Node.js + Express + MongoDB</p>
							<p>A welcoming, friendly, and</p>
							<p>all-encompassing approach to enterprise software design!</p>
						</div>
					)}

					{!isThisSaddam && (
						<div className="sidebar__headline">
							<h2>{user?.displayName}</h2>
							<h5>{user?.email}</h5>

							<p>A welcoming, friendly, and</p>
							<p>all-encompassing approach to enterprise software design!</p>
						</div>
					)}
					<div className="sidebar__starts">
						<div className="sidebar__star">
							<p>Who viewed your profile</p>
							<p className="sidebar__starNumber">
								{getRandomIntNumberBetween(10, 250) + 10}
							</p>
						</div>
						<div className="sidebar__star">
							<p>views of your post</p>
							<p className="sidebar__starNumber">
								{getRandomIntNumberBetween(10, 150) + 10}
							</p>
						</div>

						<div className="sidebar__star">
							<p>views of your video</p>
							<p className="sidebar__starNumber">
								{getRandomIntNumberBetween(10, 200) + 5}
							</p>
						</div>
					</div>
					<p className="sidebar__items">
						<TurnedInIcon className="icon" /> <span>My items</span>
					</p>
				</Card>

				<Card className="sidebar__bottom">
					<p className="heading">Recent</p>
					<p>
						<span className="icon">#</span>
						<span>React Js</span>
					</p>
					<p>
						<span className="icon">#</span>
						<span>NextJsDevelopers</span>
					</p>

					<p>
						<span className="icon">#</span>
						<span>100daysofcodechallenge</span>
					</p>

					<p>
						<span className="icon">#</span>
						<span>730daysofcode</span>
					</p>

					<p className="heading modifier">Groups</p>
					<p>
						<ViewModuleIcon className="icon martial " />

						<span>JavaScript Global Summit</span>
					</p>
					<p>
						<ViewModuleIcon className="icon martial " />

						<span>UI/ UX Design Inspiration</span>
					</p>
					<p>
						<ViewModuleIcon className="icon martial " />

						<span> Nodejs, Typescript, React</span>
					</p>

					<p className="heading modifier event">
						<span>Events</span> <span className="plus">+</span>
					</p>
					<p>
						<MenuBookIcon className="icon martial " />

						<span> Nodejs, Typescript, React</span>
					</p>
					<p>
						<MenuBookIcon className="icon martial " />

						<span>Codding for all </span>
					</p>

					<p className="heading modifier">Followed Hashtags</p>
					<p>
						<span className="icon">#</span>
						<span>100daysofcodechallenge</span>
					</p>

					<p>
						<span className="icon">#</span>
						<span>730daysofcode</span>
					</p>

					<p>
						<span className="icon">#</span>

						<span> Learn coding groups </span>
					</p>
					<div className="sidebar__discover">Discover more</div>
				</Card>
			</div>
		</SideBarWrapper>
	)
}

export default Sidebar

const SideBarWrapper = styled.div`
	@media (max-width: 578px) {
		display: none;
	}

	width: 230px;
	min-width: 230px;
	font-size: 14px;

	#fixed-position {
		position: fixed;
		width: 230px;
		min-width: 230px;
	}

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

	.sidebar__starts {
		width: 100%;
		border-bottom: 1px solid #cfcecc;
		padding: 1rem 0;
		.sidebar__star {
			display: flex;
			justify-content: space-between;
			transition: 0.4s;
			padding: 6px 1rem;
			cursor: pointer;
			width: 100%;

			&:hover {
				background: #cfcecc;
			}

			.sidebar__starNumber {
				color: #0a66c2;
			}
		}
	}

	.sidebar__items {
		display: flex;
		align-items: center;
		padding: 1rem;
		padding: 15px 0;
		padding-left: 25px;
		width: 100%;
		background: #ebebeb;
		border-top: 1px solid #cfcecc;

		span {
			cursor: pointer;
			margin-left: 3px;
			text-decoration: underline;
		}

		.icon {
			font-size: 1.3rem;
		}
	}

	.sidebar__bottom {
		padding-top: 1rem;
		font-size: 13px;
		p {
			display: flex;
			align-items: center;
			padding: 6px 1rem;
			cursor: pointer;
			width: 100%;

			&:hover {
				background: #cfcecc;
			}
		}
		.icon {
			margin-right: 10px;
		}
		.icon.martial {
			font-size: 13px;
		}

		.heading {
			color: #0a66c2;
			margin-bottom: 10px;
			cursor: none;
			&:hover {
				background: transparent;
			}
		}

		.heading.modifier {
			margin-top: 15px;
		}

		.heading.modifier.event {
			display: flex;
			justify-content: space-between;
			.plus {
				font-size: 1rem;
				font-weight: bold;
			}
		}
	}

	.sidebar__discover {
		margin-top: 20px;
		padding: 20px 0;
		text-align: center;
		border-top: 1px solid #cfcecc;
		width: 100%;
		font-size: 15px;
		cursor: pointer;
		transition: 0.4s;
		&:hover {
			background: #cfcecc;
		}
	}
`
