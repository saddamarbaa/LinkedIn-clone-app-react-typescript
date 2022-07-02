import { memo } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'
import HomeIcon from '@material-ui/icons/Home'
import NotificationsIcon from '@material-ui/icons/Notifications'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BorderClearIcon from '@material-ui/icons/BorderClear'
import PostAddIcon from '@material-ui/icons/PostAdd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import { selectUser, setLogOutState } from '../features/user/userSlice'
import { auth } from '../config/firebase'

const Header = () => {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()
	const history = useNavigate()

	const userSignedOutHandler = () => {
		// User is signed out(Remove the user from Firebase)
		if (user) {
			auth
				.signOut()
				.then(() => {
					// Sign-out successful.
				})
				.catch((error: any) => {
					// An error happened.
				})

			dispatch(setLogOutState())
			history('/login')
		}
	}

	return (
		<HeaderWrapper>
			<div className="header__container">
				<div className="header__left">
					<img src="/images/logo.png" alt="logo" />
					<div className="header__search">
						<SearchIcon />
						<input type="text" placeholder=" Search" />
					</div>
				</div>
				<div className="header__right">
					<div className="show_mobile mini-hide">
						<HeaderOption Icon={SearchIcon} />
					</div>

					<HeaderOption Icon={HomeIcon} title="Home" />

					<div className="hide_mobile">
						<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
					</div>

					<div className="hide_mobile">
						<HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
					</div>

					<HeaderOption Icon={ChatIcon} title="Messaging" />
					<HeaderOption Icon={NotificationsIcon} title="Notifications" />

					<div className="hide_mobile">
						<HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
					</div>
					<div onClick={userSignedOutHandler} style={{ marginRight: '5px' }}>
						<HeaderOption
							NoMarginRight
							avatar={user?.photoURL || '/images/index.jpg'}
							title="LogOut"
						/>
					</div>
					<div className="hide_mobile hide_mobile-tablet">
						<HeaderOption
							isBorderTrue
							className="hide_mobile"
							Icon={PostAddIcon}
							title="Post a Job"
						/>
					</div>

					<div className="hide_mobile hide_mobile-tablet">
						<HeaderOption NoMarginRight Icon={BorderClearIcon} title="Work" />
					</div>
				</div>
			</div>
		</HeaderWrapper>
	)
}

export default memo(Header)

const HeaderWrapper = styled.div`
	width: 100vw;
	position: sticky;
	top: 0;
	z-index: 99999;
	background: white;

	@media (max-width: 1200px) {
		padding: 0 20px;
	}

	.header__container {
		display: flex;
		justify-content: space-space-between;
		align-items: center;
		padding: 10px 0;
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
	}

	.header__left {
		display: flex;
		align-items: center;

		.header__search {
			padding: 10px;
			display: flex;
			align-items: center;
			border-radius: 5px;
			line-height: 1.75;
			font-weight: 400;
			font-size: 14px;
			height: 34px;
			color: gray;
			background: #eef3f8;
			max-width: 330px;
			min-width: 280px;

			@media (max-width: 568px) {
				display: none;
			}
		}

		input {
			outline: none;
			border: none;
			background: none;
			flex: 1;
		}

		img {
			object-fit: contain;
			height: 40px;
			margin-right: 10px;

			@media (max-width: 568px) {
				height: 30px;
				weight: 30px;
			}

			@media (max-width: 300px) {
				height: 25px;
				weight: 25px;
			}
		}
	}

	.header__right {
		justify-content: flex-end;
		display: flex;
		flex: 1;
		align-items: center;
	}

	.hide_mobile {
		@media (max-width: 568px) {
			display: none;
		}
	}

	.hide_mobile.hide_mobile-tablet {
		@media (max-width: 768px) {
			display: none;
		}
	}

	.show_mobile {
		display: none;
		@media (max-width: 568px) {
			display: block;
		}
	}

	.show_mobile.mini-hide {
		@media (max-width: 300px) {
			display: none;
		}
	}
`
