import React from 'react'
import classes from './Input.module.css'

const Input = (props: {
	input: JSX.IntrinsicAttributes &
		React.ClassAttributes<HTMLInputElement> &
		React.InputHTMLAttributes<HTMLInputElement>
	label:
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
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input id={props.input.id} {...props.input} />
		</div>
	)
}

export default Input
