import React from 'react'
import styled from 'styled-components'

type InputOptionType = {
	Icon: any
	title: string
	color: string
}
const InputOption = ({ Icon, title, color }: InputOptionType) => {
	return (
		<InputOptionWrapper>
			<Icon style={{ color: color }} /> <span>{title}</span>
		</InputOptionWrapper>
	)
}

export default React.memo(InputOption)

const InputOptionWrapper = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 1rem 0.7rem;
	transition: 0.3s;
	&:hover {
		background: #cfcecc;
	}
	span {
		margin-left: 0.8rem;
	}
`
