import React, { useState } from 'react'
import styled from 'styled-components'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 300) {
			setVisible(true)
		} else if (scrolled <= 300) {
			setVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	window.addEventListener('scroll', toggleVisible)
	return (
		<ScrollToTopWrapper style={{ display: visible ? 'flex' : 'none' }}>
			<ExpandLessIcon onClick={scrollToTop} className="icon" />
		</ScrollToTopWrapper>
	)
}

export default React.memo(ScrollToTop)

const ScrollToTopWrapper = styled.div`
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	min-width: 3rem;
	min-height: 3rem;
	background: #87a6c3;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: 0.3s;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	-ms-border-radius: 50%;
	-o-border-radius: 50%;
	-webkit-transition: 0.3s;
	-moz-transition: 0.3s;
	-ms-transition: 0.3s;
	-o-transition: 0.3s;

	.icon {
		font-size: 2.3rem;
		cursor: pointer;
	}

	&:hover {
		background: #0066c0;
		border: 1px solid #0066c0;
	}

	@media (max-width: 568px) {
		right: 0.1rem;
		min-width: 2.5rem;
		min-height: 2.5rem;
	}
`
