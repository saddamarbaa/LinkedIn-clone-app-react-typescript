import { CommentT } from '../../types'
import Comment from './Comment'

type Props = {
	comments: CommentT[]
}

export default function Comments({ comments }: Props) {
	return (
		<div
			className="my-2 mt-5 max-h-60 space-y-5 hover:overflow-y-scroll border-t border-gray-100 p-5 px-8 dark:border-gray-800
 ">
			{comments.map((comment, index) => (
				<Comment
					comment={comment}
					key={`${index}-${comment.timestamp?.nanoseconds || Math.random()}`}
					hideBorder={index === comments?.length - 1}
				/>
			))}
		</div>
	)
}
