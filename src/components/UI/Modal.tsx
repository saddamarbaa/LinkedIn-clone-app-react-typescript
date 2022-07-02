import React from 'react'

import classes from './Modal.module.css'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'

const Backdrop = (props: {
	onCloseCart: React.MouseEventHandler<HTMLDivElement> | undefined
}) => {
	return <div onClick={props.onCloseCart} className={classes.backdrop}></div>
}

const ModalOverlay = (props: {
	children:
		| string
		| number
		| boolean
		| React.ReactElement<any, string | React.JSXElementConstructor<any>>
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined
}) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	)
}

const Modal = (props: { onCloseCart: any; children: any }) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop onCloseCart={props.onCloseCart} />,
				// @ts-ignore
				document.getElementById('overLays'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				// @ts-ignore
				document.getElementById('overLays'),
			)}
		</Fragment>
	)
}

export default Modal
