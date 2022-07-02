import React from 'react'
import styled from 'styled-components'

type CardDType = {
	children: React.ReactNode
}
const Card = ({ children }: CardDType) => {
	return <CardD>{children}</CardD>
}

export default Card

const CardD = styled.div`
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	border-radius: 14px;
	background-color: white;
	width: 100%;
`
