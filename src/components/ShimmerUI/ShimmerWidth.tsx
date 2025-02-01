import React from 'react'

interface ShimmerWidthProps {
	width: string
	height: string
	className?: string
}

const ShimmerWidth: React.FC<ShimmerWidthProps> = ({
	width,
	height,
	className = '',
}) => {
	return (
		<div
			className={`animate-pulse bg-gray-300 rounded ${className}`}
			style={{ width: width, height: height }}
		/>
	)
}

export default ShimmerWidth
