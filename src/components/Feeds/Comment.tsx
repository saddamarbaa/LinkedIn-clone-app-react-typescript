import Moment from 'moment'
import { CommentT } from '../../types'
import Avatar from '../UI/Avatar'

type Props = {
	comment: CommentT
	hideBorder: boolean
}

export default function Comment({ comment, hideBorder }: Props) {
	{
		console.log(comment.user)
	}

	return (
		<div
			key={comment.timestamp?.nanoseconds}
			className="relative flex space-x-2">
			{!hideBorder && (
				<hr className="border-twitter/30 absolute left-5 top-10 h-8 border-x dark:border-white/30" />
			)}

			<Avatar
				url={(comment.user?.photoURL as string) || '/images/default-avatar.png'}
				alt="User Avatar"
				className="w-8 h-8"
			/>
			<div>
				<div className="flex items-center space-x-1">
					<p className="mr-1 font-bold">{comment.user.displayName}</p>
					<p className="hidden text-sm text-gray-500 lg:inline">
						@{comment.user.displayName?.toLowerCase()}·
					</p>

					{comment.timestamp?.seconds && (
						<span className="hidden text-gray-500 md:flex">
							{Moment.unix(comment.timestamp.seconds).fromNow()}
						</span>
					)}
				</div>
				<p>{comment.text}</p>
			</div>
		</div>
	)
}
