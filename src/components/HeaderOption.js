/** @format */

import { Avatar } from "@material-ui/core";
import { memo } from "react";
import styled from "styled-components";

const HeaderOption = ({ Icon, title, avatar, isBorderTrue }) => {
	return (
		<HeaderOptionWrapper showBorder={isBorderTrue}>
			{Icon && <Icon className='headerOption__icon' />}

			{avatar && <Avatar className='headerOption__icon' src={avatar} />}
			<span className='headerOption__title'>{title}</span>
		</HeaderOptionWrapper>
	);
};

export default memo(HeaderOption);

const HeaderOptionWrapper = styled.div`
	border-left: ${(props) => (props.showBorder ? "0.1px solid lightgray" : "")};
	padding-left: ${(props) => (props.showBorder ? "20px" : "")};
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-right: 20px;
	color: gray;
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
`;
