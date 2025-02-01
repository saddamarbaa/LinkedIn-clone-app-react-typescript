export interface Notification {
	id: number
	title: string
	time: string
	icon: 'like' | 'comment' | 'connect' | 'share' | 'endorse'
	badge?: string
	body?: string
	data?: any // You can specify more detailed types if needed
	dir?: string
	// Add any other properties that might be required by the type
}
