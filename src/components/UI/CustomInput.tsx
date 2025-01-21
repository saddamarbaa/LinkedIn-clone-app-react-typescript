import React from 'react'
import { FieldError } from 'react-hook-form'

type CustomInputProps = {
	label: string
	type: string
	id: string
	register: any
	error?: FieldError
}

const CustomInput: React.FC<CustomInputProps> = ({
	label,
	type,
	id,
	register,
	error,
}) => {
	return (
		<div className="flex flex-col">
			<label
				htmlFor={id}
				className={`text-start block font-bold mb-2 ${
					error ? 'text-red-500' : ''
				}`}>
				{error ? error.message : label}
			</label>
			<input
				autoComplete="off"
				className={`px-4 py-[0.6rem] border rounded shadow transition focus:border-customBlue-300 cursor-pointer ring-0 dark:bg-customBlack-700 ${
					error
						? 'border-red-500 bg-red-100 focus:border-red-500'
						: 'border-gray-300 hover:border-gray-500'
				}`}
				type={type}
				id={id}
				aria-invalid={error ? 'true' : 'false'}
				{...register(id)}
			/>
		</div>
	)
}

export default CustomInput
