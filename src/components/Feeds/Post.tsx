import { formatDistanceToNow } from 'date-fns'

import { PostResponseType } from '../../types'
import Card from '../UI/Card'
import Avatar from '../UI/Avatar'
import { CiGlobe } from 'react-icons/ci'
import { HiDotsHorizontal } from 'react-icons/hi'
import { MdClear } from 'react-icons/md'
import InputOption from './InputOption'
import { FaComment, FaPaperPlane, FaShare, FaThumbsUp } from 'react-icons/fa'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { TbMoodAngry } from 'react-icons/tb'
import { getRandomIntNumberBetween } from '../../utils'

type Props = {
	post: PostResponseType
}

function Post({ post }: Props) {
	const comments = post?.comments ?? getRandomIntNumberBetween(100, 0)
	const reposts = post?.reposts ?? getRandomIntNumberBetween(100, 0)
	const likes = post?.likes ?? getRandomIntNumberBetween(100, 0)

	return (
		<Card className="cursor-pointer px-0">
			<div>
				<div className="flex space-x-1 w-full px-4">
					<Avatar
						url={post?.imgUrl || '/images/linkedin-b.png'}
						alt="profile image"
					/>
					<div className="flex-1">
						<h4 className="font-bold capitalize hover:text-customBlue-950 dark:hover:text-customWhite-40 ">
							<span>{post?.name}</span>
							<span className="text-xs text-gray-500 ml-2 dark:text-customWhite-500">
								Following
							</span>
						</h4>
						<p className="text-xs text-customBlue-950 dark:text-customWhite-100 font-semibold">
							View my portfolio
						</p>
						<p className="text-xs flex text-gray-500">
							{/* Calculate and display relative time */}
							<span>
								{post?.timestamp
									? formatDistanceToNow(post.timestamp.toDate(), {
											addSuffix: true,
									  })
									: 'Just now'}
							</span>
							<span>
								<CiGlobe className="ml-4 text-sm" />
							</span>
						</p>
					</div>
					<div className="flex space-x-3">
						<HiDotsHorizontal className="text-sm cursor-pointer" />
						<MdClear className="text-sm cursor-pointer" />
					</div>
				</div>
				<div className="px-4 py-2 text-sm">{post.postContent}</div>
				{post.optionPostImage && (
					<div className="post-option-img">
						<figure>
							<img
								className="w-full cursor-pointer"
								src={post.optionPostImage}
								alt="post image"
								loading="lazy"
							/>
						</figure>
					</div>
				)}
				<div className="flex items-center justify-between mt-2 dark:text-white text-sm px-4">
					<div className="flex items-center">
						<FcLikePlaceholder className="w-3 h-3" />
						<FaThumbsUp className="w-3 h-3 text-customBlue-950  dark:text-customWhite-40 dark:hover:text-customWhite-40" />
						<FcLike className="w-3 h-3" />
						<TbMoodAngry className="w-3 h-3" />
						<span className="text-customBlue-950 font-bold text-sm ml-2 dark:hover:text-customWhite-40 dark:text-customWhite-40">
							{likes}
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<p>{comments} comments</p>
						<p>{reposts} reposts</p>
					</div>
				</div>
				<div className="flex items-center justify-between mt-3 dark:text-white border-t dark:border-customBlack-600 text-sm px-4">
					<InputOption
						Icon={FaThumbsUp}
						title="Like"
						IconClassName="w-4 h-4"
						titleClassName="md:text-base"
						className="space-x-2 py-2"
					/>
					<InputOption
						Icon={FaComment}
						title="Comment"
						IconClassName="w-4 h-4"
						titleClassName="md:text-base"
						className="space-x-2 py-2"
					/>
					<InputOption
						Icon={FaShare}
						title="Repost"
						IconClassName="w-4 h-4"
						titleClassName="md:text-base"
						className="space-x-2 py-2"
					/>
					<InputOption
						Icon={FaPaperPlane}
						title="Send"
						IconClassName="w-4 h-4"
						titleClassName="md:text-base"
						className="space-x-2 py-2"
					/>
				</div>
			</div>
		</Card>
	)
}

export default Post
