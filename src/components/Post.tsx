import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Avatar } from '@material-ui/core'
import InputOption from './InputOption'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import CommentIcon from '@material-ui/icons/Comment'
import SendIcon from '@material-ui/icons/Send'
import ShareIcon from '@material-ui/icons/Share'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// @ts-ignore
import Fade from 'react-reveal/Fade'

import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import { PostResponseType } from '../types'

const Post = React.forwardRef<HTMLDivElement, PostResponseType>(
	(props, ref) => {
		const user = useSelector(selectUser)
		const { name, imgUrl, postContent, optionPostImage, optionHeadline } = props
		const [isThisSaddam, setIsThisSaddam] = useState(false)

		useEffect(() => {
			if (
				user?.displayName?.includes('saddam') ||
				user?.email?.includes('saddam')
			) {
				setIsThisSaddam(true)
			}
		}, [user])

		return (
			<PostWrapper ref={ref}>
				<div className="post-top">
					<div className="post-dev">
						<Avatar
							className="avatar"
							src={imgUrl || '/images/index.jpg'}
							alt="img"
						/>

						<div className="post-dev-headline">
							{isThisSaddam && <h4>Web Development Coach | Saddam Arbaa</h4>}
							{!isThisSaddam && <h4>{name}</h4>}

							{isThisSaddam && (
								<p>
									Rich Experienced Web Application Engineer | Mobile App Developer | Blockchain Engineer | React Native + Reactjs + Redux + Next js + JavaScript + TypeScript + Node.js + Express + Blockchain + Web3
									MongoDB"{' '}
								</p>
							)}
							{!isThisSaddam && <p>{optionHeadline} </p>}
						</div>
					</div>

					<MoreHorizIcon />
				</div>
				<Fade bottom>
					<div className="post-content">{postContent}</div>
				</Fade>
				<div className="post-option-img">
					<LazyLoadImage alt="" src={optionPostImage} />
				</div>
				<div className="post-buttons">
					<InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
					<InputOption Icon={CommentIcon} title="Comment" color="gray" />
					<InputOption Icon={ShareIcon} title="Share" color="gray" />
					<InputOption Icon={SendIcon} title="Send" color="gray" />
				</div>
			</PostWrapper>
		)
	},
)

export default React.memo(Post)

const PostWrapper = styled.div`
	padding: 1rem;

	.post-top {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;

		.post-dev-headline {
			h4 {
				margin-top: 1rem;
				margin-bottom: 0.3rem;
			}
		}

		.post-dev {
			display: flex;
		}

		.avatar {
			width: 80px;
			height: 80px;
			margin-right: 1rem;
			border-radius: 50%;
		}

		.post-content {
			padding: 0.5rem;
		}
	}

	.post-option-img img {
		padding-top: 1rem;
		width: 100%;
		max-width: 40rem;
	}

	.post-buttons {
		margin-top: 1rem;
		border-top: 1px solid #cfcecc;
		display: flex;
	}
`
