import { AuthResponseType } from './auth'

export interface TimestampT {
	seconds: number
	nanoseconds: number
}

export interface CommentT {
	text: string
	user: AuthResponseType
	timestamp: TimestampT
}

export interface PostResponseType {
	id: string
	title: string
	user: AuthResponseType
	content: string
	timestamp: TimestampT
	userRef: string
	images: string[]
	reposts?: AuthResponseType[]
	likes?: AuthResponseType[]
	comments?: CommentT[]
	optionPostImage?: string
	postContent?: string
}

export type Notification = {
	id: number
	title: string
	time: string
	icon: 'like' | 'comment' | 'connect' | 'share' | 'endorse'
}
