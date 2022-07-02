import { Avatar, SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { memo } from 'react'
import styled from 'styled-components'

type HeaderOptionProps = {
	Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>
	isBorderTrue?: boolean
	className?: string
	title?: string
	NoMarginRight?: boolean
	avatar?: string
	showBorder?: boolean
}

const HeaderOption = ({
	Icon,
	title,
	avatar,
	isBorderTrue = false,
	NoMarginRight = false,
}: HeaderOptionProps) => {
	return (
		<HeaderOptionWrapper
			showBorder={isBorderTrue}
			NoMarginRight={NoMarginRight}>
			{Icon && <Icon className="headerOption__icon" />}
			{avatar && <Avatar className="headerOption__icon" src={avatar} />}
			<span className="headerOption__title">{title}</span>
		</HeaderOptionWrapper>
	)
}

export default memo(HeaderOption)

interface StyleProps {
	showBorder: boolean
	NoMarginRight: boolean
}

const HeaderOptionWrapper = styled.div<StyleProps>`
	border-left: ${(props) => (props.showBorder ? '0.1px solid lightgray' : '')};
	padding-left: ${(props) => (props.showBorder ? '20px' : '')};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: ${(props) => (props.NoMarginRight ? '0px' : '30px')};
	cursor: pointer;
	transition: 0.4s;
	&:hover {
		color: black;
	}
	.headerOption__title {
		cursor: pointer;
		font-size: 12px;
		font-weight: 400;
		@media (max-width: 992px) {
			display: none;
		}
	}
	.headerOption__icon {
		object-fit: contain;
		height: 26px;
		width: 26px;
	}
`
