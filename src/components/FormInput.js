import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	height: 2em;
`
const FormInput = ({
	input,
	placeholder,
	type,
	meta: { touched, error, warning }
}) => (
	<div>
		<div>
			<Input {...input} placeholder={placeholder} type={type} />
			{touched &&
			((error && <span>{error}</span>) ||
				(warning && <span>{warning}</span>))}
		</div>
	</div>
)
export default FormInput
