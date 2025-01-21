import { ReactNode } from 'react'
type Props = {
	children: ReactNode
}
export default function Card({ children }: Props) {
	return (
		<div className="overflow-hidden rounded bg-white shadow p-3 border-0 dark:bg-customBlack-700 dark:border-0">
			{children}
		</div>
	)
}
