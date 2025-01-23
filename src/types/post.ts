export interface PostResponseType {
	likes?: number
	comments?: number
	reposts?: number
	id?: string
	imgUrl?: string
	optionHeadline?: string
	postContent?: string
	optionPostImage?: string
	timestamp?: {
		seconds?: number
		nanoseconds?: number
	}
	name?: string
}
